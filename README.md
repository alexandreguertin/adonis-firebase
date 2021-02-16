# adonis-firebase

A simple Firebase provider for Adonis with an authentication scheme compatible with Firebase authentication.

## To keep in mind

Since users can register directly through Firebase, the first time they ping your Adonis instance, there will be no corresponding entry in the database. The schema handles this situation and creates the user.

## Installation
You can install the package from npm.
```bash
adonis install @alexandreguertin/adonis-firebase [--yarn]
```

Make sure to read [instructions.md](instructions.md) file.