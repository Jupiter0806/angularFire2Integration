This project is for integrating ionic2 with angularFire2 which has adapted angular2.

Following instruction at :
  https://angularfire2.com/api/

Start from step 2, and used command of
  ```` cmd
    npm install firebase --save
    npm install angularfire2 --save
  ````

Install typing
  ````
    npm install typings -g
    typings install --save firebase
  ````

Skipped step 4 as cannot find ember-cli-build.js

angularFire.database.list() not angularFire.list().

Other instructions followed
  http://www.masteringionic2.com/blog/2017-02-23-integrating-firebase-into-an-ionic-2-app-with-angularfire2-part-1/

Conclusion:
  AngularFire2 may be a great tool to work with firebase, but it requires too much work to set it up. Besides,
    I believe using firebase JS SDK is quite easily. So I prefer using firebase JS SDK.

For future using, need to implement read and write.
