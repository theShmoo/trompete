# Trompete

## Posts

lagerjodel.firebase.com/database/posts.json

### Color

RGB hex value

Defaults:

* orange (#FF9908)
* yellow (#FFBA00)
* red (#DD5F5F)
* blue (#06A3CB)
* bluegreyish (#8ABDB0)
* green (#9EC41C)

### Text

240 UTF-8 characters

### ID

the firebase message id derived from firebase

### User

reference to the user id

### Comment

(optional) bool if it is a comment

default: false

### Comments

array to references to post ids

### Time

timestamp of the post

## Users

lagerjodel.firebase.com/database/users.json

### ID

the firebase message id derived from firebase

### Posts

array to references to posts

## Vote

### User

reference to a user id

### ID

the firebase message id derived from firebase

## Comment (is actually a post)

a comment is actually a post but:
 * its comment field is set to true.
 * the color field is ignored (and may be empty)
 * can't have any comments


