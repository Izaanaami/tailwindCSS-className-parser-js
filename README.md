<p align="center">
  <b>package to parse and create tailwindcss classes with javascript</b>
  <br/>
  <br/>
  you can get information like css property and value, variants and more from tailwind classes in js
</p>

&nbsp;

### Installation

```
npm install @tailwindcss-parser
```

&nbsp;

<!-- ### Usage

[Open demo in codesandbox](https://codesandbox.io/s/tailwind-utils-m0lvu5?expanddevtools=1) -->

<br/>

### Setup:

```ts
import tailwindParser from 'tailwindcss-parser';
import config from './tailwind.config.js'; // your tailwind config file, optional

const { parse, classname } = Utils(config);
```

<br/>

### usage
parse className:

```ts
const definition = parse('w-48');
// { property: 'width', value: '12rem' }

const definition = parse('md:hover:bg-red-200/50');
/* 
{ 
  responsiveModifier: 'md', 
  pseudoModifier: 'hover', 
  property: 'backgroundColor' 
  value: '#fecaca80'
}
*/

const definition = parse("[direction:rtl]");
// {property: "direction", value: "rtl"}

const definition = parse("p-[100px]");
/* 
{
  property: "padding", 
  value: "100px", 
  relatedProperties: ["padding-top","padding-right","padding-bottom","padding-left"]
}

*/
```

<br/>

create className:

```ts
const { className } = classname({ property: 'margin', value: '-16rem' });
// -m-64

const { className } = classname({
  responsiveModifier: 'md',
  pseudoModifier: 'hover',
  property: 'backgroundColor',
  value: '#fecaca80'
});
// md:hover:bg-red-200/50

const { className, error } = classname({
  responsiveModifier: 'small',
  property: 'textColor',
  value: '#fecaca80'
});
/*
{
  error: {
    responsiveModifier: 'Unidentified responsive modifier, expected one of [sm, md, lg, xl, 2xl], got small'
  }
}
*/
```

&nbsp;


#### Github

[GITHUB Repository](https://github.com/Izaanaami/tailwind-parser-js) 



#### license

MIT © [Izaanaami](https://github.com/Izaanaami)



**Thanks to [siddharthkp](https://github.com/siddharthkp) who built the main part of this package**
