**Situace**
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní web podle specifikací níže.
Každá sekce webu má působit, jako by její návrh stál 20 tisíc korun. Web má působit prémiově, v souladu se značkou a jako hotový profesionální produkt.
Výsledný web nemá vypadat jako web vytvořený AI, vyvaruj se typickým grafickým prvkům.

**Cíl**
Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

**Úkol**
Vytvoř funkční web, který bude obsahovat:
●	Strukturovaný komentovaný HTML5 kód s validní sémantikou
●	Responzivní design (mobile-first přístup)
●	CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
●	CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp 
●	Základní JavaScript pro interaktivitu (na jemné oživení stránek)

**Znalosti**
●	Zajisti rychlé načítání a optimalizovaný výkon
●	Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
●	Vlož favicon ve formát svg (pokud ho nemáš dodaný, vytvoř ho)
●	Pokud web produkuje marketingové a statistické cookies, vytvoř Cookie lištu, která bude obsahovat tlačítka Přijmout, Odmítnout a Nastavit. Vytvoř ji v barvách webu.
●	Jako kanonickou (tj. preferovanou) URL webu chci revaharibala.cz a web přesměruj z verze www na bez www (poznámka: můžete to chtít opačně, je to jedno)
●	Přesměrování http→https je řešeno na úrovni hostingu, nedávej ho do souboru .htaccess

**Bezpečnost**
Vytvoř bezpečnostní hlavičku v .htaccess
Hlavička	Co dělá
X-Frame-Options: SAMEORIGIN	Tvůj web nelze vložit do cizího iframu — ochrana před clickjackingem (útok, kdy tě někdo přiměje kliknout na něco, co nevidíš)
X-Content-Type-Options: nosniff	Prohlížeč nebude hádat typ souboru — zabrání spuštění souboru, který se tváří jako obrázek, ale je to skript
Strict-Transport-Security	Po prvním HTTPS spojení si prohlížeč zapamatuje, že web používá jen HTTPS — zabrání downgrade útoku na HTTP
Referrer-Policy: strict-origin-when-cross-origin	Při přechodu na jiný web odesílá jen doménu (ne celou URL s parametry) — necíleš zbytečně citlivé URL třetím stranám
Permissions-Policy	Explicitně zakazuje stránce přistupovat k mikrofonu, kameře a geolokaci — i kdyby se někdo dostal do kódu, nemůže tyto API zapnout


**Práce s CSS**
Při tvorbě webu vždy pracuj s CSS jako s design systémem, ne jako s náhodnými styly.

1. Struktura CSS
•	Veškeré styly zapisuj výhradně do style.css.
•	CSS musí být hlavní zdroj stylování pro celý web.
•	Nepoužívej inline styly ani <style> bloky v HTML (výjimky jen s jasným zdůvodněním kritického CSS).

2. Povinný design systém (na začátku projektu)
Vytvoř v style.css základní systém proměnných:
Barvy (CSS variables)
•	definuj:
o	primary
o	secondary
o	background
o	text
o	muted
o	accent
Spacing systém
•	používej škálu např.:
o	4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
•	nikdy nevymýšlej náhodné hodnoty
Typografie
•	definuj:
o	base font size
o	h1–h6 hierarchii
o	line-height pravidla
•	používej konzistentní škálování (např. 1.25 ratio)
Layout pravidla
•	definuj:
o	container max-width
o	grid systém (např. 12 sloupců nebo flex systém)
o	breakpointy (mobile-first)

3. Tvorba komponent
Každý prvek webu navrhuj jako komponentu:
•	button
•	navbar
•	card
•	form
•	section
•	hero
Každá komponenta musí:
•	být znovupoužitelná
•	nemít pevně zakódované hodnoty

4. CSS disciplína (velmi důležité)
•	Nepiš jednorázové styly pro konkrétní HTML prvek.
•	Nepoužívej nadměrnou specifitu (žádné zbytečné !important).
•	CSS musí být škálovatelné pro budoucí rozšíření webu.


**Čisté URL (bez .html) **
Vytvoř web s čistými URL (bez .html) a zároveň přidej serverovou pojistku pro staré odkazy.
Pravidla pro frontend:
•	Všechny interní odkazy (href) generuj pouze jako čisté URL:
o	/sluzby, /kontakt, /o-mne
o	Nikdy nepoužívej .html v navigaci, tlačítkách, obsahu, sitemap ani canonical URL.
Serverová pojistka:
•	Vytvoř .htaccess s pravidly:
o	301 redirect všech .html URL na čisté URL
o	interní rewrite čistých URL na odpovídající .html soubory (pokud existují)


**Základní SEO**
●	Strukturuj nadpisy H1-H6
●	Přidej meta title a description na každé stránce
●	Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
●	Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
●	Obrázkům dej alt popisky
●	Propoj stránky vnitřními odkazy
●	Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)

**Optimalizace obrázků**
●	Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
●	Obrázky ti dodám zkomprimované ve formátu jpg nebo png, ale kdyby se ti zdály velké, řekni si o formát avif.
**Vizuální hierarchie a čitelnost**
●	Jasná typografická hierarchie (nadpisy H1-H6, konzistentní velikosti)
●	Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
●	Čitelné fonty s českou diakritikou, minimální velikost 16px
●	Správné řádkování (line-height 1.5-1.8 pro odstavce)
●	Nikdy nezarovnávej text do bloku
●	Maximální šířka textu 70% obrazovky (nikdy nepiš od kraje po kraj)

**Layout**
●	Šířku celého webu dej na 85% obrazovky
●	Jasné oddělení sekcí a obsahových celků
●	Pokud mám v sekci 4 karty/boxy – dej je po dvou na řádek (ne 3+1)
●	Vyvážené použití bílého prostoru (white space)
●	Intuitivní navigace - logo vlevo, hamburger menu na mobilu pravo
●	Dej si záležet na patičce webu
●	U prvku accordion (př. pro otázky a odpovědi) dávej ikonu šipky dolů a nahoru a pokud je jich víc než 3, tak je rozděl do dvou sloupců
●	Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
●	Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
●	Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

**Obsah**
●	Stručné a srozumitelné texty
●	Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
●	Nadpisy (H1–H6) nikdy nekonči tečkou
●	Vizuální prvky podporující obsah (ikony, obrázky, grafika)
●	Logické uspořádání informací (nejdůležitější nahoře)
●	Chybová stránka (místo „404“ dej ikonu <wa-icon name="face-frown" variant="regular"></wa-icon>) a přidej ji na web pomocí příkazu v souboru .htaccess: ErrorDocument 404 /404.html
●	Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

**Konzistence**
●	Jednotný styl tlačítek, karet a komponent
●	Stejný padding/margin napříč podobnými elementy
●	Stejné zaoblení prvků
●	Konzistentní ikonografie (používej font awesome, ne emotikony)
●	Stíny karet pouze velmi jemné
●	Jednotný projev značky (brand voice)
●	Konzistentní použití barev napříč celým webem
●	Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

**Barevná paleta**
●	Omezený počet barev (2-3 hlavní + neutrální)
●	Primární barva pro CTA (call-to-action) tlačítka
●	Neutrální jemné barvy pro pozadí 
●	Pro text #333333
●	Brand barvy (HEX): 
   - primární: #8A7C73
   - sekundární: #B5C8C3
   - tlačítka: #4C5BBF
   - pozadí: #FFFAF3
   - text: [#333333]

**Fonty**
●	Zvol vhodný patkový nebo bezpatkový font podle obsahu webu
●	Všechny nadpisy H1–H6 (napříč celým webem, včetně hero sekce) piš fontem Bodoni Moda

**Struktura**
●	více stránkový web
●	Položky menu
 Můj přístup
Programy
O mně
Reference
FAQ
Rezervovat konzultaci


**Design**
Design celého webu vytvoř podle přiloženého referenčního obrázku. Neokopíruj jeho obsah ani barvy, ale inspiruj se celkovou atmosférou, kompozicí a úrovní zpracování.
Web musí působit jako prémiová osobní značka, nikoliv jako klasická jazyková škola.
Dodrž následující principy:
•	elegantní editorial styl 
•	velkorysý bílý prostor (whitespace) 
•	kvalitní typografická hierarchie 
•	střídání světlých a tmavších sekcí pro vytvoření rytmu stránky 
•	velké nadpisy a kratší odstavce 
•	minimalistické outline ikony 
•	jemné mikroanimace pouze na hover a při scrollování 
•	jemné stíny, žádné výrazné efekty 
•	nepoužívej gradienty, glassmorphism ani futuristické AI prvky 
•	design musí působit nadčasově a luxusně 
Vizuálně se inspiruj prémiovými osobními značkami, butikovými studii a konzultanty, nikoliv online kurzy nebo jazykovými školami.
Fotografií bude k dispozici pouze omezené množství. Design proto stav především na kvalitní typografii, ikonách, kartách, statistikách, citacích, práci s bílým prostorem a promyšleném layoutu.
Každá sekce by měla mít vlastní charakter, ale zároveň tvořit vizuálně jednotný celek.

**obrázky**
Na webu použij fotky  a obrázky, které najdeš ve složce Obrazky.

**texty**
Na webu použij tyto texty pro jednotlivé stránky – zatím mám jen homepage. Drž se jich doslova a nic neměň ani nepřidávej. 
Homepage – finální text
Hero
**H1**
Mluvte anglicky. Konečně beze strachu.

**H2**
Pomáhám lidem, kteří už zkusili ledacos, ale stále nemají jistotu při mluvení.

CTA:
- Rezervovat konzultaci
- Poznat můj přístup
Sekce 2 – Poznáváte se v tom?
- Angličtinu se učíte už roky, ale pořád nemáte pocit, že se posouváte.
- Když máte promluvit, raději mlčíte nebo hledáte správná slova.
- Začali jste věřit, že na jazyky prostě nemáte talent.
- Vyzkoušeli jste kurzy, aplikace i učebnice, ale stále hledáte způsob, který vám bude opravdu vyhovovat.
- Ve své práci působíte sebevědomě. Jakmile ale máte promluvit anglicky, jako by se všechna jistota vytratila.
- Chcete se konečně domluvit přirozeně a s větší jistotou.

Pokud jste se v těchto větách poznali, nejste sami. A možná je příčina úplně jinde, než si myslíte.
Sekce 3 – Možná problém nikdy nebyl ve vás.
Za jedenáct let praxe jsem díky své metodě rozmluvila spoustu „beznadějných případů“ – věčné začátečníky, silné dyslektiky i technické typy, kteří věřili, že nemají talent na jazyky.

Všichni měli jedno společné. Angličtina pro ně byla zmatkem. Učili se fráze, kterým nerozuměli, slovíčka, která neuměli správně vyslovit, a postupně získali pocit, že se anglicky prostě nikdy nenaučí.

Mnozí si navíc nesli hluboké trauma ze školního prostředí. Stačil jeden učitel bez dostatku empatie, který je ztrapnil před celou třídou, a vznikl strach z chyby, který je provázel i v dospělosti.

Mohu vám pomoci tento blok odstranit a rozklíčovat angličtinu tak, aby vám konečně začala dávat smysl.

Jsem váš průvodce bezpečnou angličtinou.
Sekce 4 – Můj přístup
Objevte největší blok, který vám brání mluvit anglicky.

Existuje jeden zásadní blok, kolem kterého většina lidí při učení angličtiny roky chodí.

Ve své práci pomáhám klientům tento blok objevit a odstranit. Díky tomu angličtina přestává být chaosem a začíná konečně dávat smysl.

CTA: Poznejte můj přístup
Sekce 5 – O mně
Vždy stojím na vaší straně jako průvodce, ne jako lektorka.

Nevěřím na výuku založenou na tlaku nebo strachu z chyb. Mým cílem je vytvořit prostředí, ve kterém se budete cítit bezpečně, pochopeně a budete mít odvahu začít mluvit.

11+ let praxe

Tisíce odučených hodin

Desítky rozmluvených klientů

CTA: Poznejte můj příběh
Sekce 6 – Reference
Jak moje studentka Eva popsala okamžik, kdy díky mé metodě konečně začala angličtině rozumět

„Měla jsem úplnou hrůzu z toho přečíst nebo říct anglickou větu. Strašně jsem se v tom jazykovém zmatku ztrácela.

Réva mě donutila uvěřit, že nevadí, když něco špatně řeknu nebo přečtu. Začaly jsme pracovat s její metodou Strukturálního mezijazyka.

Můj mozek najednou začal pracovat na té úrovni sám od sebe. Réva ho přes ten svůj mezijazyk prostě přinutila vnímat doslovný rozdíl mezi skládáním slov v češtině a angličtině, aby vnímal obrácený systém angličtiny. A já se konečně uvolnila.“

CTA: Přečíst další reference
Sekce 7 
Zajímá vás, jestli by tento přístup mohl fungovat i pro vás?

Každý člověk má jiný příběh a jinou zkušenost s angličtinou. Ráda si vyslechnu ten váš a společně zjistíme, co vás při mluvení nejvíce brzdí a jakou cestou se vydat, aby pro vás byla angličtina konečně přirozená.

CTA: Rezervovat úvodní konzultaci

O mně – finální text
Vždycky jsem si ráda dělala věci po svém, obzvlášť když mi přišlo, že klasický způsob je nefunkční, zdlouhavý a nudný. Vymyslela jsem si, jak to, co jsem musela dělat, udělat co nejefektivněji a zábavně. Jsem trochu rebel.

Pamatuju si velmi dobře pocit z hodin angličtiny... ta nekončící nuda a koukání na hodinky, kdy už bude konec. Není nic nudnějšího než chodit na klasické hodiny angličtiny – takové ty s učebnicí a cvičeními, která se musí všechna vyplnit, a s čekáním, až na mě dojde řada. A proto, když jsem se rozhodovala jít studovat na pedagogickou fakultu, byla jsem si 100% jistá, že takhle já učit nikdy nebudu.

Také si pamatuji, jak moji spolužáci, zejména dyslektici nebo ty „technické, ne úplně jazykové typy“, stojí před tabulí, přede všemi ve třídě, a učitel je ztrapní do takové míry, že jim vytvoří blok na angličtinu na celý život. (Znám ten pocit z hodin matematiky – stojím před tabulí a mám v hlavě prázdno a nevím už ani, kolik je jedenkrát nula.)

I po ukončení studia na vysoké škole – obor dějepis, angličtina pro druhý stupeň základní školy – jsem stále v sobě nesla všechny bloky, které my – Češi a obzvláště moje generace – v sobě neseme. Obrovský strach, abych neřekla něco špatně, a strach z toho, že se nebudu moct dostatečně rychle vymačknout. A pak jsem odjela do Spojených států a zjistila, že je to vlastně úplně jinak. Namísto toho, aby lidé reagovali netrpělivě na moji chybnou angličtinu, byli všichni naprosto nadšení, že mluvíme anglicky. Líbil se jim můj přízvuk a zjistila jsem, že konverzace s lidmi vůbec není o tom nedělat chyby, ale o tom, že se domluvíte. Že dojde k dopravení informace a získání informace, a že to je vlastně obrovská zábava. Nikdy se mi za těch asi 15 let, co jsem žila ve Spojených státech a v Londýně, nestalo, že by někdo reagoval na moji nedokonalou angličtinu negativně. Vždycky jsem se setkala jen s upřímným obdivem.

A možná si teď řeknete: no jo, ale ona měla vystudovanou angličtinu… I s vystudovanou angličtinou můžete ze začátku říkat nesmysly – jako třeba moje slavná věta v laundromatu (prádelně) v New Yorku, když jsem požádala paní, která tam pracovala, jestli by mě mohla přebalit. (Can you change me?) Paní se sice velmi pobaveně usmála, ale byla v tom lidská sympatie a pochopení a řekla, že jsem asi chtěla říct, jestli by mě nemohla rozměnit. (Can you give me change?) A díky tomuto mému faux pas jsme se staly kamarádkami. A pokud vám to ještě nestačí: i když už se připravujete na nejvyšší cambridgeskou zkoušku – CPE (Proficiency), stejně můžete říkat nesmysly. Třeba jako já, když jsem pracovala v obchodě s běhacími botami a říkala půl roku svým zákazníkům: „že tahle vestička pomůže udržet vaši mrtvolu v teple“ (This gilet will help you to keep your corpse warm) namísto „tahle vestička vám pomůže udržet váš střed těla v teple“ (This gilet will help you to keep your core warm).

Protože jsem celkem rebelská nátura, nedokážu moc dělat věci, které mě nebaví. Musím přijít na to, jak tu věc dělat, aby mě opravdu bavila. A bylo tomu tak i s angličtinou... kterou jsem se opravdu naučila tak, že jsem si sedla do velkého knihkupectví třeba v Chicagu nebo v Londýně, dala si kafe, přinesla si k tomu hromadu knih a časopisů a hodiny si četla o něčem, co mě doopravdy baví, a sem tam si k tomu vypisovala zajímavá slovíčka a fráze. Stejným způsobem jsem koukala na videa na YouTube nebo na filmy. Prostě to musí byt něco, co vás opravdu baví a koukáte na to ne proto, že se učíte jazyk (to je až druhotné), ale hlavně proto, že se chcete dozvědět víc o oblíbeném tématu. Jazyk je nástroj nesoucí informaci. A když už jsem opravdu musela dělat nějaká ta cvičení – na CPE (Cambridge Proficiency Exam) jich musíte udělat celkem hodně, tak to většinou bylo v mé oblíbené kavárně u oblíbeného kafíčka. Prostě to musí být příjemný zážitek.

Když jsem se vrátila zpět do Čech a začala jsem učit angličtinu jako lektorka, přišla jsem brzy na to, že cesta k tomu, abych mohla svým studentům opravdu efektivně a rychle pomoct pochopit angličtinu a rozmluvit je, určitě nepovede skrze nekonečné vyplňování cvičení v učebnicích. A tak nějak intuitivně jsem přišla na svoji metodu Strukturálního mezijazyka, která se mi opravdu velmi osvědčila.

A pokud se bojíte, že se přede mnou budete bát udělat chybu, tak vždycky říkám svým novým studentům, že za těch 11 let, co učím angličtinu, jsem už slyšela vše. Pravděpodobně nemůžete udělat chybu a říct nesmysl, který jsem již neslyšela. Všichni jsme to přežili a k tomu jsme se naučili sami sobě zasmát.
