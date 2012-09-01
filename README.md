node-l10n-file
==============

A filesystem adapter for node-l10n; this allows you to load localisation resources from the filesystem under nodejs.

See 'example' directory for an example of how to use this with node-l10n.

Results from the example code:

```
[andy@monkey example]$ node example.js 

Testing in language: en
=======================

Standard version:
   No quick brown foxes jumped over the lazy dog.
   A quick brown fox jumped over the lazy dog.
   2 quick brown foxes jumped over the lazy dog.
   3 quick brown foxes jumped over the lazy dog.

Testing parameter substitution:
   No quick pink foxes jumped over the lazy dog.
   A quick pink fox jumped over the lazy dog.
   2 quick pink foxes jumped over the lazy dog.
   3 quick pink foxes jumped over the lazy dog.

Testing in language: de
=======================

Standard version:
   Keine schnelle braune Fuchsen sprang über den faulen Hund.
   Eine schnelle braune Fuchs sprang über den faulen Hund.
   2 schnelle braune Fuchsen sprang über den faulen Hund.
   3 schnelle braune Fuchsen sprang über den faulen Hund.

Testing parameter substitution:
   Keine schnelle rosa Fuchsen sprang über den faulen Hund.
   Eine schnelle rosa Fuchs sprang über den faulen Hund.
   2 schnelle rosa Fuchsen sprang über den faulen Hund.
   3 schnelle rosa Fuchsen sprang über den faulen Hund.
```

LICENSE
=======

BSD/MIT/WTFPL license. Use at your own risk.

