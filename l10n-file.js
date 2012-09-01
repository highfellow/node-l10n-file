/**
 * file adapter for node-l10n.
 * (C) 2012 Andrew Baxter <andy@highfellow.org>
 **/

fs = require('fs');

function L10n_File() {
  // return a resource loader function that works with the filesystem under nodejs.
  this.getLoader = function() {
    return(function(path,success,failure,async) {
      if (async) {
        // load the resource asynchronously.
        fs.readFile(path, 'utf-8', function(err, data) {
          if (err) {
            failure && failure();
          } else {
            success && success(data);
          }
        });
      } else {
        // load synchronously (used for includes).
        try {
          data = fs.readFileSync(path, 'utf-8');
        } catch(err) {
          console.log("Error loading resource file:", path, err);
          failure && failure(err);
        }
        success && success(data);
      }
    });
  }
}

module.exports = L10n_File;
