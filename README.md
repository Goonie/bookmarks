# Goonie Bookmarks

This is a bookmark tool that also offers short-ish URLs. It's written in TypeScript, based on React+Redux and Firebase. A working version can be viewed here:

<https://link.goonie.nl>

## Configuration

1. Create a [Firebase](https://firebase.google.com) project;

2. Set up a web app for your Firebase project;

3. Enable Firestore, and set up a `bookmarks` collection:

```
id    :  automatic
name  :  string
url   :  string
```

4. Copy the `.env` file to `.env.local` and add your Firebase web app configuration.
