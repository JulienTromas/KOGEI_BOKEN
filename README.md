# KŌGEI_BŌKEN
This was created during my time as a student at Code Chrysalis

Kōgei Bōken is an API used to learn more about the various traditional crafts found across Japan,
allowing users to research a specific prefecture or kind of craft.


# GET
```
/kougei_bouken/areas
```
Will display all of the areas of Japan

```
/kougei_bouken/prefectures
```
Will display all of the prefectures of Japan

```
/kougei_bouken/crafts
```
Will display all of the traditional crafts of Japan

```
/kougei_bouken/categories
```
Will display all of the categories of Japan

```
/kougei_bouken/discovery_list
```
Will display the discovery list of the user

```
/kougei_bouken/area/:id/prefectures
```
Will display all the prefectures in an area

```
/kougei_bouken/prefectures/:id/crafts
```
Will display all the traditional crafts of a specific prefecture

```
/kougei_bouken/category/:id/crafts
```
Will display all the prefectures in an area


# PATCH
```
/kougei_bouken/area/:id/:newName
```
Will allow to change the name of an area

# POST
```
/kougei_bouken/prefectures/:id/:name/:areaId
```
Will create a new prefecture

# DELETE
```
/kougei_bouken/prefecture/:id
```
Will delete the prefecture corresponding to the provided id
