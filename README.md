# ASCIIFY
Package to convert UTF-8 to ASCII with minimal loss

### [NPM](https://www.npmjs.com/package/@rbxts/asciify)

Example usage
```ts
const str = "Hello and Привет";
const ascii_str = Asciify(str); //Hello and Privet;
```

Installation
```bash
#npm
npm i @rbxts/asciify

#bun
bun add @rbxts/asciify
```

Test:
```
  Hello World!123 -> Hello World!123
  
   -> 
   ->    	
  ÀÁÂÃÄÅàáâãäå -> AAAAAAaaaaaa
  ÇÈÉÊËçèéêë -> CEEEEceeee
  ÌÍÎÏìíîï -> IIIIiiii
  ÑÒÓÔÕÖñòóôõö -> NOOOOOnooooo
  ÙÚÛÜùúûü -> UUUUuuuu
  ÝŸýÿ -> YYyy
  ŁłŃńŚśŹźŻż -> LlNnSsZzZz
  «»“”‘’–— -> <<>>""''---
  ±°©®§¶ -> +-deg(c)(r)SSP
  Currency: €£¥¢₩₺₽ -> Currency: EURPSY=C/WLR
  αβγδεζηθικλμνξοπρσςτυφχψω -> abgdezethiklmnxoprsstuphkhpso
  АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ -> ABVGDEIoZhZIIKLMNOPRSTUFKhTsChShShch'Y'EIuIa
  אבגדהוזחטנסעףפץצקרשת -> AbgdhvzHTns`ppTSTSkrSHt
  漢字 -> HanZi
  日本語 -> RiBenYu
  한글 -> hangeul
  ⺀⺙⺮⺲ -> ####
  😀🤢🎉🚀⭐️❤️🔥 -> #########
  ✓∞≠≤≥÷ -> ###<=>=/
  Françoise -> Francoise
  ßeta -> sseta
  ENCYCLOPÆDIA -> ENCYCLOPAEDIA
  ça va! mon élève -> ca va! mon eleve
  mIxEd CaSe ßÖ -> mIxEd CaSe ssO
  Ligatures: ﬁﬂﬃﬄ -> Ligatures: fiflffiffl
  ¹²³¼½¾ -> 1231/41/23/4
  ①❷➂⓸ -> 1##4
  ÅÅ -> AA
  ﷺ -> #
  ⁵⅞∭∞ -> 57/8##
  \u00ef -> \u00ef
  \u00C6 -> \u00C6
  Daniël Renée François Bjørn in’t Veld -> Daniel Renee Francois Bjorn in't Veld
  北京→東京 -> BeiJing-DongJing
```

Data taken from [here](https://github.com/anyascii/anyascii/blob/master/unidecode/unidecode-py.tsv)

original data structure 

`{ [unicode]: ascii_representation }`

aka

`"${unicode}\t${ascii_representation}\"`;

transformed data structure
`{ [ascii_representation]: unicode[]}`

aka

`"${ascii_representation}\t${unicodes.join(",")}"`

result - size 345kb -> 160kb

because there's a lot of unicodes that have the same ascii_representation


# Q&A
- Q: Why not to compress with e.g. Z-lib?
- A: I tried it and the output size was compressed only by 20kb (140kb) but z-lib is quite big library that is 110kb so compression is not worth imo
------------------------
- Q: Why not to do http request to that link
- A:
  - 1 Compication if you want to use it on the client
  - 2 Not everybody wants to enable Http requests
  - 3 They not as reliable and as fast as saving the data in module script
  - 4 If z-lib is only 110kb, the dataset could fit as well because it's slightly bigger
  
