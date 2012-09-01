/**
 * file adapter for node-l10n.
 * (C) 2012 Andrew Baxter <andy@highfellow.org>
 **/

function L10n-file() {
  this.getLoader = function() {
    return(function(path,success,failure,async) {
      path = './' + path;
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
        if (data && (data != '')) {
          success && success(data);
        } else {
          failure && failure(err);
        }
      }
    });
  }
}

module.exports = L10n-file;
