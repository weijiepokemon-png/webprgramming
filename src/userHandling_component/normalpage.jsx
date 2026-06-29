import { useState } from 'react';
import LoginButton from '../admin_components/login'
import HomeButton from '../visitor_components/homeButton';
import SearchBar from '../visitor_components/searchBar';
import CartButton from '../visitor_components/cartButton';
import Testbackend1 from '../database_components/test';

import ItemDisplayed from '../visitor_components/itemDisplayed';

import AboutButton from '../visitor_components/aboutButton';
import Contactbutton from '../visitor_components/contactbutton';

//THE HOME PAGE. IT SHOWS SOME ITEMS ON DISPLAYED WITH BUTTONS ON TOP

function NormalPage(props){
    //this is the container for the normal page

      const [user, setUser]= useState("visitor"); //to determine if user is visitor, customer or admin


    return(<div className='bg-light text-white min-vh-100 ' >

    <div className="d-flex align-items-center gap-3">
      <HomeButton />
      <SearchBar />
      <LoginButton state={user} updaterMethod={setUser} />
      <CartButton />
      <AboutButton/>
      <Contactbutton/>
    </div>

    <h1 className='bg-primary'> WELCOME TO ENTERTAINMENT GUILD WEBSTORE</h1>


<ItemDisplayed id={4}/>
<ItemDisplayed id={2}/>
    <ItemDisplayed id={18}/>
<ItemDisplayed id={19}/>
<ItemDisplayed id={20}/>
<ItemDisplayed id={21}/>
<ItemDisplayed id={22}/>
<ItemDisplayed id={23}/>
<ItemDisplayed id={24}/>

   </div>
    );


}
export default NormalPage;
/*
my list of arhived stuff; =====================================================
<Testbackend1 id={1}/>
        <Testbackend1 id={2}/>
    <Testbackend1 id={3}/>

 <button >test</button>
    <button className="btn btn-primary">Click Me</button>
    <button className="btn btn-primary">Blue</button>
<button className="btn btn-success">Green</button>
<button className="btn btn-danger">Red</button>
<button className="btn btn-warning">Yellow</button>
<button className="btn btn-dark">Black</button>
<button className="btn btn-outline-primary">Blue outline</button>

<button className="btn btn-primary btn-lg mt-3 px-4 fw-bold">
  Click Me
</button>


*/

/** ===================================================================================================
 * to use bootstrap css, import it from root, then in each element, state the classname
 * the class name inside state which style to use
 * 
 * list of styles;
 *  Here you go — copy and paste this entire thing:


BOOTSTRAP CLASSES USED IN THIS PROJECT

NAVBAR
navbar — Makes it a navbar
navbar-expand-lg — Collapses into hamburger on mobile
navbar-dark — Makes text/icons white
bg-dark — Dark background
navbar-brand — Styles the logo/brand name
navbar-toggler — The hamburger button on mobile
collapse navbar-collapse — The collapsible menu area
navbar-nav ms-auto — Nav links pushed to the right
nav-item — Each nav link item
nav-link — Styles the link
active — Highlights the current page

BACKGROUNDS
bg-dark — Dark/black background
bg-primary — Blue background
bg-light — Light grey background
bg-white — White background
bg-success — Green background
bg-danger — Red background
bg-warning — Yellow background
bg-secondary — Grey background

TEXT COLOURS
text-white — White text
text-muted — Grey/faded text
text-primary — Blue text
text-success — Green text
text-danger — Red text
text-warning — Yellow text
text-white-50 — Semi-transparent white text

BUTTONS
btn — Required on every button
btn-primary — Blue button
btn-success — Green button
btn-danger — Red button
btn-warning — Yellow button
btn-dark — Black button
btn-light — White button
btn-outline-primary — Blue outline button
btn-lg — Large button
btn-sm — Small button

LAYOUT / GRID
container — Centers content and adds padding
row — Creates a horizontal row
col-md-6 — Half width on medium screens
col-lg-4 — One third width on large screens
col-lg-6 — Half width on large screens
g-4 — Gap between columns
d-flex — Makes something a flexbox
align-items-center — Vertically centres items
justify-content-center — Horizontally centres items
gap-3 — Space between flex items
ms-auto — Pushes something to the right
mx-auto — Centres something horizontally
d-none d-lg-block — Hidden on mobile, visible on large screens

CARDS
card — Creates a card box
card-body — Inside content area of a card
card-title — Heading inside a card
card-text — Paragraph text inside a card
shadow-sm — Small drop shadow
h-100 — Full height card

BADGES
badge — Small label/tag
bg-primary — Blue badge
bg-success — Green badge
bg-danger — Red badge
bg-secondary — Grey badge

ALERTS
alert — Creates an alert box
alert-primary — Blue alert
alert-success — Green alert
alert-warning — Yellow alert
alert-danger — Red alert
alert-info — Light blue alert
alert-dismissible — Adds a close X button

FORM
form-control — Styles a text input or textarea
form-label — Styles a label above an input
form-select — Styles a dropdown menu
input-group — Groups an icon and input together
input-group-text — Icon on the side of an input
was-validated — Triggers green/red validation colours
valid-feedback — Green success message
invalid-feedback — Red error message
d-grid — Makes button full width

SPACING
p-4 — Padding on all sides
py-5 — Padding top and bottom
px-4 — Padding left and right
mb-3 — Margin bottom
mt-4 — Margin top
ms-3 — Margin left
me-2 — Margin right

TYPOGRAPHY
fw-bold — Bold text
fw-semibold — Semi-bold text
display-4 — Very large heading
lead — Slightly larger paragraph text
small — Smaller text
fs-5 — Font size 5
text-decoration-none — Removes underline from links

ACCORDION
accordion — The accordion container
accordion-item — Each question/answer block
accordion-header — The question heading
accordion-button — The clickable question
accordion-collapse — The answer that hides/shows
accordion-body — The answer text
collapsed — Keeps the item closed by default

PROGRESS BARS
progress — The grey track bar
progress-bar — The coloured fill bar

TABLE
table — Styles a plain HTML table
table-hover — Highlights rows on hover
table-dark — Dark header row
table-responsive — Horizontal scroll on mobile


when needing multiple, put in same class name together, below example;
 <button className="btn btn-primary btn-lg mt-3 px-4 fw-bold">
  Click Me
</button>

 This one button has 5 classes applied at the same time:

	•	btn — makes it a Bootstrap button
	•	btn-primary — makes it blue
	•	btn-lg — makes it large
	•	mt-3 — adds margin on top
	•	px-4 — adds padding left and right
	•	fw-bold — makes the text bold
 *  
 */

  /**=====================================================================================================
   * If you're asking about **Bootstrap border utility classes**, here are the main border-related keywords available in Bootstrap 5:

### Add Borders

```html
border
border-top
border-bottom
border-start
border-end
```

### Remove Borders

```html
border-0
border-top-0
border-bottom-0
border-start-0
border-end-0
```

### Border Colors

```html
border-primary
border-secondary
border-success
border-danger
border-warning
border-info
border-light
border-dark
border-white
```

Also available with theme colors:

```html
border-body
border-body-secondary
border-body-tertiary
border-black
```

### Border Width

```html
border-1
border-2
border-3
border-4
border-5
```

### Border Opacity

```html
border-opacity-10
border-opacity-25
border-opacity-50
border-opacity-75
border-opacity-100
```

### Rounded Corners

```html
rounded
rounded-0
rounded-1
rounded-2
rounded-3
rounded-4
rounded-5
rounded-pill
rounded-circle
```

### Rounded Specific Sides

```html
rounded-top
rounded-bottom
rounded-start
rounded-end
```

### Rounded Specific Corners

```html
rounded-top-start
rounded-top-end
rounded-bottom-start
rounded-bottom-end
```

### Example

```jsx
<div className="border border-primary border-3 rounded-3">
  Content
</div>
```

This creates:

* Border enabled
* Primary color
* Width 3
* Medium rounded corners

If you mean **CSS `border-style` keywords**, those are:

```css
border-style: solid;
border-style: dashed;
border-style: dotted;
border-style: double;
border-style: groove;
border-style: ridge;
border-style: inset;
border-style: outset;
border-style: none;
border-style: hidden;
```

   */

/**
 * For **Bootstrap 5 background utility classes**, the main options are:

### Theme Background Colors

```html
bg-primary
bg-secondary
bg-success
bg-danger
bg-warning
bg-info
bg-light
bg-dark
bg-black
bg-white
```

### Body / Theme-Aware Backgrounds

```html
bg-body
bg-body-secondary
bg-body-tertiary
```

### Transparent

```html
bg-transparent
```

### Background Opacity

Used together with a background color:

```html
bg-opacity-10
bg-opacity-25
bg-opacity-50
bg-opacity-75
bg-opacity-100
```

Example:

```jsx
<div className="bg-primary bg-opacity-25">
  Content
</div>
```

### Gradient

```html
bg-gradient
```

Example:

```jsx
<div className="bg-primary bg-gradient">
  Content
</div>
```

### Common Related Utilities

#### Text Color

```html
text-primary
text-secondary
text-success
text-danger
text-warning
text-info
text-light
text-dark
text-white
text-body
text-muted
```

#### Shadows

```html
shadow-none
shadow-sm
shadow
shadow-lg
```

#### Opacity

```html
opacity-0
opacity-25
opacity-50
opacity-75
opacity-100
```

### Example

```jsx
<Card className="bg-dark text-white border border-secondary shadow rounded-3">
  <Card.Body>
    Dark card
  </Card.Body>
</Card>
```

If you're looking for a complete Bootstrap styling cheat sheet (spacing, flex, sizing, colors, borders, backgrounds, typography, etc.), I can provide that as well.

 */