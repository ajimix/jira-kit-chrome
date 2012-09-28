/**
*
* Extension to give custom function to Jira.
*
* Licensed under the Apache License 2.0
*
* Author: Ajimix [github.com/ajimix]
*
*/

( function(){

/**
 * Add issue code to subtasks table.
 */
if ( $( 'issuetable' ) ){
	var sIssue = '';
	$$( '#issuetable .stsummary' ).each( function( oElement ) {
		sIssue = oElement.getParent().get( 'data-issuekey' );
		oElement.grab( new Element( 'span', {
			'text': '(' + sIssue + ') '
		} ), 'top' );
	} );
}

/**
 * Duplicate Log Time button to have it in a more visible place.
 */
var oLogWork 		= $( 'log-work-link' );
if ( oLogWork ){
	var oNewLog 	= oLogWork.clone(),
		oNewLi 		= new Element( 'li.toolbar-item' );
	oNewLog.set( {
		'id': 'log-work-link2',
		'class': 'toolbar-trigger conjoined issueaction-log-work'
	} );
	oNewLi.grab( oNewLog );
	$( 'opsbar-opsbar-operations' ).grab( oNewLi );
}

/**
 * Dashboard custom options.
 */
if ( $( 'dashboard' ) ) {
	var oDashboardTabs = $$( '.page-type-dashboard #dashboard.v-tabs ul.vertical' ),
		oDashboard = $$( '.page-type-dashboard #dashboard.v-tabs' );

	oDashboardTabs.addEvents( {
		'mouseover': function() {
			this.tween( 'width', '160px!important' );
			oDashboard.tween( 'padding-left', '160px!important' );
		},
		'mouseout': function() {
			this.tween( 'width', '40px!important' );
			oDashboard.tween( 'padding-left', '40px!important' );
		}
	} );

	oDashboardTabs.setStyles( {
		width: '40px'
	} );

	oDashboard.setStyles( {
		'padding-left': '40px'
	} );
}

var ajaxFunctions = function() {
	/**
	 * Automatically change the start time when you log work.
	 */
	var oTimeLogged = $( 'log-work-time-logged' );

	if ( oTimeLogged ) {
		var updateStartTime = function( eEvent ) {

			var sTimeSpent = this.value;
			if ( sTimeSpent.test( /w|d|h|m/ ) ) {
				var oDateStarted	= $( 'log-work-date-logged-date-picker' ),
					dCurrentDate	= new Date(),
					aMonths			= [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

				// Change time spent to milliseconds.
				var nMilliseconds	= 0,
					nDaysWeek		= 7,
					nHoursDay		= 24,
					nMinutesHour	= 60,
					nMillMinute		= 60000,
					aTimeSpent		= [];

				if ( sTimeSpent.indexOf( ' ' ) === -1 ) {
					aTimeSpent.push( sTimeSpent );
				} else {
					aTimeSpent = sTimeSpent.split( ' ' );
				}

				aTimeSpent.each( function( sIndTimeSpent ) {
					var nTimeSpent = sIndTimeSpent.match( /[0-9]*/ );
					if ( nTimeSpent !== null ) {
						nTimeSpent = nTimeSpent[ 0 ];
						if ( sIndTimeSpent.indexOf( 'w' ) !== -1 ) {
							nMilliseconds += nTimeSpent * nDaysWeek * nHoursDay * nMinutesHour * nMillMinute;
						} else if ( sIndTimeSpent.indexOf( 'd' ) !== -1 ) {
							nMilliseconds += nTimeSpent * nHoursDay * nMinutesHour * nMillMinute;
						} else if ( sIndTimeSpent.indexOf( 'h' ) !== -1 ) {
							nMilliseconds += nTimeSpent * nMinutesHour * nMillMinute;
						} else if ( sIndTimeSpent.indexOf( 'm' ) !== -1 ) {
							nMilliseconds += nTimeSpent * nMillMinute;
						}
					}
				} );

				// Substract milliseconds.
				var dNewDate = new Date( dCurrentDate.getTime() - nMilliseconds );

				// Set the new value in text box.
				var nNewHour = dNewDate.getHours();
				if ( nNewHour > 12 ) {
					sMidday = 'PM';
					nNewHour -= 12;
				} else {
					sMidday = 'AM';
				}
				oDateStarted.set( 'value', dNewDate.getDate() + '/' + aMonths[ dNewDate.getMonth() ] + '/' + ( dNewDate.getFullYear().toInt() - 2000 ) + ' ' + nNewHour + ':' + dNewDate.getMinutes() + ' ' + sMidday );
			}
		};

		oTimeLogged
			.removeEvent( 'keyup', updateStartTime )
			.addEvent( 'keyup', updateStartTime );
	}
};

/**
 * This is the request that sends the background.js
 * It's called on each ajax call
 */
chrome.extension.onRequest.addListener(function() {
	ajaxFunctions();
});

} )();