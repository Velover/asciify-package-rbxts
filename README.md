# ASCIIFY
Package to convert UTF-8 to ASCII with minimal loss

Example usage
```ts
const str = "Hello and Привет";
const ascii_str = Asciify(str); //Hello and Privet;
```



Test:

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
