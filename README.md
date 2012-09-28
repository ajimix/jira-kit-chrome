Atlassian JIRA Kit Chrome extension
===================================

This extension provides some small tweaks (mostly visual) to make JIRA fron Atlassian more user-friendly.

Feel free to add whatever you want to the project.

**Remember to change some two files to fit your jira domain.** (read below for more information).

How to install extension
------------------------

- Download the github project and save it to any folder.

- Open **manifest.json** with any text editor. And change the **two** lines that says "\*://site.domain/\*" to whatever your jira domain is. Eg: \*://jira.intranet/\* or \*://jira.atlassian.com/\*. Then save the file.

- Open **background.js** with any text editor. And change the line that says "\*://site.domain/\*" to whatever your jira domain is. Eg: \*://jira.intranet/\* or \*://jira.atlassian.com/\*. Then save the file.

- Go to your Google Chrome extensions page or enter **chrome://extensions** into chrome url bar.

- Enable developer mode.

- Click on **Load uncompressed extension**.

- Navigate to downloaded folder and open it.

- Enjoy!


Adding more features
--------------------

If you wish to add more features to the extension, just fork the project, do your changes and make a pull request.


Author
------

**Twitter:** [@ajimix](http://twitter.com/ajimix)

**GitHub:** [github.com/ajimix](https://github.com/ajimix)


Copyright and license
---------------------

Copyright 2012 Ajimix

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this work except in compliance with the License.
You may obtain a copy of the License in the LICENSE file, or at:

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.