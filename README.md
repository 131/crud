[![Build Status](https://travis-ci.org/131/crud-fs.svg?branch=master)](https://travis-ci.org/131/crud-fs)
[![Coverage Status](https://coveralls.io/repos/github/131/crud-fs/badge.svg?branch=master)](https://coveralls.io/github/131/crud-fs?branch=master)

[![Version](https://img.shields.io/npm/v/crud-fs.svg)](https://www.npmjs.com/package/crud-fs)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![Code style](https://img.shields.io/badge/code%2fstyle-ivs-green.svg)](https://www.npmjs.com/package/eslint-plugin-ivs)


# Motivation

crud-fs is a simple static fs backed HTTP CRUD server. (you PUT, DELETE, GET files from the local fs). This is a lightweight read-write alternative to express.static.



# Available API
## Create or Update a file
```
echo "foo" | curl -X PUT -T - http://localhost:8090/bar
```

## Read a file
```
curl -X GET http://localhost:8090/bar

```
## Delete a file
```
curl -X DELETE http://localhost:8090/bar
```

# Not in API, maybe todo
* [ ] Move things
* [ ] List directories
* [ ] Rename things



# Credits 
* [131](https://github.com/131)
