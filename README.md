# project-my
"My" personalized CSS, JavaScript, and some (?) jQuery.

This:

```html
<div class="-container --row ---col">
  <div>
    <div class="-blue"></div>
    <div></div>
  </div>
  <div>
    <div></div>
    <div></div>
  </div>
</div>
```

Becomes this:

```html
<div class="-container">
  <div class="-row">
    <div class="-blue -col"></div>
    <div class="-col"></div>
  </div>
  <div class="-row">
    <div class="-col"></div>
    <div class="-col"></div>
  </div>
</div>
```
