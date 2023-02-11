# CSS Dinner 

## 1. Select the plates

```css
<div class="table">
	<plate />
	<plate />
</div>
```

Answer: `plate`

## 2. Select the bento boxes

```css
<div class="table">
	<bento />
	<plate />
	<bento />
</div>
```

Answer: `bento`

## 3. Select the fancy plate

```css
<div class="table">
  <plate id="fancy" />
  <plate />
  <bento />
</div>
```

Answer: `#fancy`

## 4. Select the apple on the plate

```css
<div class="table">
  <bento />
  <plate>
    <apple />
  </plate>
  <apple />
</div>
```

Answer: `plate apple`

## 5. Select the pickle on the fancy plate

```css
<div class="table">
  <bento>
    <orange />
  </bento>
  <plate id="fancy">
    <pickle />
  </plate>
  <plate>
    <pickle />
  </plate>
</div>
```

Answer: `#fancy pickle`

## 6. Select the small apples

```css
<div class="table">
  <apple />
  <apple class="small" />
  <plate>
    <apple class="small" /> --> Curioso👈👀
  </plate>
  <plate />
</div>
```

Answer: `apple.small`

## 7. Select the small oranges

```css
<div class="table">
  <apple />
  <apple class="small" />
  <bento>
    <orange class="small" />
  </bento>
  <plate>
    <orange />
  </plate>
  <plate>
    <orange class="small" />
  </plate>
</div>

```

Answer: `orange.small`



```css
``` 
6 
7 
8 bento orange.small  
9 plate, bento  
10 *  
11 plate *  
12 plate +apple  
13 bento ~ pickle  
14 plate > apple  
15 orange:first-child  
16 plate apple:only-child, plate pickle:only-child  
17 plate apple:last-child, pickle:last-child  
18 plate:nth-child(3)  
19 bento:nth-last-child(3)  
20 apple:first-of-type  
21 plate:nth-of-type(even)  
22 plate:nth-of-type(2n+3)  
23 apple:only-of-type  
24 apple:last-of-type, orange:last-of-type  
25 bento:empty  
26 apple:not(.small)  
27 [for]  
28 plate[for]  
29 [for=“Vitaly”]  
30 [for^=“Sa”]  
31 [for$=“to”]  
32 [for*=“obb”]