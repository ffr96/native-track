# Gm track - Native

Mobile implementation of GM Track.

Most of the code lives at src/features. Routes are decided based on whether the user is logged
or not.  
Restyle is used to create _most_ of the components so that the theme/styles are enforced
throughout the app.

## Things to change/consider

### Layout

Height of views are _predefined._

And, sizes are defined at utils/constants:

- **Navbar** is **8%.**
- **Top** is **8%.**
- That means the **body** itself shouldn't be bigger than **84%** or we
  risk having data not displayed properly.

### Api/Hooks

While having API/hooks compartmentalized into each feature makes sense, logs/getLogs and weight/getWeight are obviously very similar so they could be abstracted into a more reusable function.

### TODO

Implement add exc/log/weight forms, pagination (when reaching bottom of the scrollview).  
Overview route
