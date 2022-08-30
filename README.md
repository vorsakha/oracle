## Issues

### (linux users) If you end up with the "SDK location not found" issue
Create a local.properties file at the android folder and paste this:
```
sdk.dir = /home/USER/Android/Sdk
```
"USER" being you machine username


### 'cz' is not a git command.
```
git: 'cz' is not a git command. See 'git --help'.
```
Install commitizen as a global npm package
```
npm install -g commitizen
```