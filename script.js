

function genMLB() {
    int_list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
                '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
                '41', '42', '43', '44', '45', '46', '47', '48', '49', '50']
  
    animals = ['cat', 'dog', 'mouse', 'parrot', 'snake', 'car', 'moto', 'goat', 'horse', 'donkey',
               'flower', 'house', 'dog', 'tree', 'bicycle', 'ufo', 'baseball', 'football', 'basketball',
               'hockey']
  
    ones = ['Arizona Diamondbacks', 'Atlanta Braves', 'Baltimore Orioles',
            'Boston Red Sox', 'Chicago Cubs', 'Chicago White Sox',
            'Cincinnati Reds', 'Cleveland Guardians', 'Colorado Rockies',
            'Detroit Tigers', 'Houston Astros', 'Kansas City Royals',
            'Los Angeles Angels', 'Los Angeles Dodgers', 'Miami Marlins',
            'Milwaukee Brewers', 'Minnesota Twins', 'New York Mets',
            'New York Yankees', 'Oakland Athletics', 'Philadelphia Phillies',
            'Pittsburgh Pirates', 'San Diego Padres', 'San Francisco Giants',
            'Seattle Mariners', 'St. Louis Cardinals', 'Tampa Bay Rays',
            'Texas Rangers', 'Toronto Blue Jays', 'Washington Nationals']
  
    twos = ['Diamondbacks', 'Braves', 'Orioles', 'Red Sox', 'Cubs',
            'White Sox', 'Reds', 'Guardians', 'Rockies', 'Tigers',
            'Astros', 'Royals', 'Angels', 'Dodgers', 'Marlins',
            'Brewers', 'Twins', 'Mets', 'Yankees', 'Athletics',
            'Phillies', 'Pirates', 'Padres', 'Giants', 'Mariners',
            'Cardinals', 'Rays', 'Rangers', 'Blue Jays', 'Nationals']
  
    list_1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
              11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
              21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
              31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
              41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
  
    list_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
              11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
              21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
              31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
              41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
  
    

    json_data = {'cat1':'2717460796','dog1':'226987431','mouse1':'1313749756','parrot1':'622375723','snake1':'490399013','car1':'348113876','moto1':'376455068',
                 'goat1':'529079972','horse1':'688920387','donkey1':'912768372','flower1':'1702728503','house1':'454447047','dog1':'226987431','tree1':'103116659',
                 'bicycle1':'452842105','ufo1':'469369086','baseball1':'1713099083','football1':'207254169','basketball1':'309731071','hockey1':'4581423287',
                 'cat2':'318375991','dog2':'68095927','mouse2':'1360173639','parrot2':'3402580637','snake2':'1243981665','car2':'599164606','moto2':'929219606',
                 'goat2':'446648501','horse2':'739065291','donkey2':'476558611','flower2':'196654747','house2':'9614508016','dog2':'68095927','tree2':'230384528',
                 'bicycle2':'1821791512','ufo2':'1097023771','baseball2':'1290762171','football2':'1058397659','basketball2':'1232371163','hockey2':'462579107',
                 'cat3':'1401283939','dog3':'455609527','mouse3':'1414113889','parrot3':'619393987','snake3':'1998266975','car3':'2153275970','moto3':'949625631',
                 'goat3':'650198769','horse3':'1102450338','donkey3':'3530344326','flower3':'782660213','house3':'785826339','dog3':'455609527','tree3':'2513060421',
                 'bicycle3':'348276721','ufo3':'103194933','baseball3':'3022571950','football3':'1813918444','basketball3':'993514767','hockey3':'886944978',
                 'cat4':'329372798','dog4':'2691727544','mouse4':'1230529291','parrot4':'137470665','snake4':'811468785','car4':'192375585','moto4':'114492973',
                 'goat4':'383787240','horse4':'277636226','donkey4':'641550649','flower4':'480367033','house4':'469220975','dog4':'2691727544','tree4':'586213299',
                 'bicycle4':'982021686','ufo4':'724407540','baseball4':'284652113','football4':'230841688','basketball4':'502646083','hockey4':'1178012571',
                 'cat5':'2355288393','dog5':'192643526','mouse5':'295208754','parrot5':'149847684','snake5':'614260038','car5':'4433672851','moto5':'590756974',
                 'goat5':'770984726','horse5':'769603565','donkey5':'416738226','flower5':'3438902083','house5':'366689521','dog5':'192643526','tree5':'4668024631',
                 'bicycle5':'626887694','ufo5':'10081526189','baseball5':'328088173','football5':'390157073','basketball5':'468481099','hockey5':'1343086633',
                 'cat6':'295024840','dog6':'934522104','mouse6':'503305174','parrot6':'561788066','snake6':'149865328','car6':'96613921','moto6':'374962678',
                 'goat6':'629806678','horse6':'396613373','donkey6':'456662986','flower6':'392543172','house6':'669661130','dog6':'934522104','tree6':'215738230',
                 'bicycle6':'254834514','ufo6':'109406889','baseball6':'456014879','football6':'826512721','basketball6':'1512317286','hockey6':'3470352512',
                 'cat7':'977101507','dog7':'215507244','mouse7':'1723031239','parrot7':'1974787856','snake7':'499635529','car7':'293112555','moto7':'628241801',
                 'goat7':'3597320981','horse7':'8770482988','donkey7':'333677209','flower7':'1471683309','house7':'80953254','dog7':'215507244','tree7':'1187396063',
                 'bicycle7':'736268001','ufo7':'705133507','baseball7':'404219712','football7':'201344507','basketball7':'455803099','hockey7':'1058118510',
                 'cat8':'939914028','dog8':'223737818','mouse8':'557804594','parrot8':'769419001','snake8':'793518977','car8':'329639023','moto8':'216906088',
                 'goat8':'1107295454','horse8':'1619070956','donkey8':'527390878','flower8':'480582306','house8':'738188615','dog8':'223737818','tree8':'1154091423',
                 'bicycle8':'864782707','ufo8':'138439651','baseball8':'252132627','football8':'634444043','basketball8':'647465657','hockey8':'874249100',
                 'cat9':'3481841978','dog9':'53372485','mouse9':'375446696','parrot9':'263539746','snake9':'213288578','car9':'178800406','moto9':'1965906196',
                 'goat9':'470137153','horse9':'670917048','donkey9':'446143871','flower9':'901597879','house9':'709224637','dog9':'53372485','tree9':'41857079',
                 'bicycle9':'97052045','ufo9':'122860793','baseball9':'1622406678','football9':'3398597932','basketball9':'113918041','hockey9':'1132914578',
                 'cat10':'899260733','dog10':'885972914','mouse10':'627788759','parrot10':'246553717','snake10':'111622337','car10':'207093396',
                 'moto10':'131919226','goat10':'450732756','horse10':'444167913','donkey10':'701420350','flower10':'436870202','house10':'145207090',
                 'dog10':'885972914','tree10':'56775732','bicycle10':'1578568257','ufo10':'1457007405','baseball10':'748699995','football10':'1676042341',
                 'basketball10':'1099774605','hockey10':'2674090771','cat11':'345716809','dog11':'1530576427','mouse11':'665123960','parrot11':'1277838552',
                 'snake11':'3169468954','car11':'173621859','moto11':'73306589','goat11':'168649026','horse11':'4625473291','donkey11':'345528337',
                 'flower11':'841837156','house11':'583800226','dog11':'1530576427','tree11':'60517841','bicycle11':'148502888','ufo11':'389743050',
                 'baseball11':'506983951','football11':'281500984','basketball11':'83485406','hockey11':'550318192','cat12':'56235965','dog12':'31014280',
                 'mouse12':'561254281','parrot12':'548866950','snake12':'129307070','car12':'471794363','moto12':'390474769','goat12':'939903120',
                 'horse12':'371508793','donkey12':'421810066','flower12':'672542740','house12':'368488755','dog12':'31014280','tree12':'267232505',
                 'bicycle12':'371728484','ufo12':'1276751443','baseball12':'406122676','football12':'3985685268','basketball12':'390757508',
                 'hockey12':'2952783909','cat13':'1995681670','dog13':'599817939','mouse13':'916920566','parrot13':'527541444','snake13':'290920462',
                 'car13':'158710595','moto13':'445152662','goat13':'350917729','horse13':'1818254382','donkey13':'363744939','flower13':'516047654',
                 'house13':'138132429','dog13':'599817939','tree13':'80457185','bicycle13':'1076258974','ufo13':'455987262','baseball13':'1495243023',
                 'football13':'365556995','basketball13':'154567639','hockey13':'433932101','cat14':'980407740','dog14':'113293033','mouse14':'1675421940',
                 'parrot14':'5980525716','snake14':'93730954','car14':'315383738','moto14':'65581018','goat14':'790519446','horse14':'1131301630',
                 'donkey14':'267273770','flower14':'460930184','house14':'336857443','dog14':'113293033','tree14':'49755133','bicycle14':'1142683108',
                 'ufo14':'871844586','baseball14':'662737244','football14':'417243745','basketball14':'130710538','hockey14':'453673114','cat15':'4221578831',
                 'dog15':'165701467','mouse15':'683321995','parrot15':'2665635150','snake15':'2704259025','car15':'551044653','moto15':'368766534',
                 'goat15':'298781784','horse15':'180300956','donkey15':'204624483','flower15':'250273476','house15':'426426651','dog15':'165701467',
                 'tree15':'60721444','bicycle15':'427903293','ufo15':'696971572','baseball15':'312401749','football15':'57789984','basketball15':'51859636',
                 'hockey15':'270116903','cat16':'6238054657','dog16':'629370517','mouse16':'573523366','parrot16':'833305317','snake16':'250621594',
                 'car16':'292605929','moto16':'355498959','goat16':'1911922758','horse16':'663091569','donkey16':'274716764','flower16':'507554109',
                 'house16':'193936181','dog16':'629370517','tree16':'218479664','bicycle16':'1789484528','ufo16':'1276776822','baseball16':'642983376',
                 'football16':'665700607','basketball16':'550842765','hockey16':'3913312401','cat17':'324267505','dog17':'79892025','mouse17':'151756179',
                 'parrot17':'87526441','snake17':'96160553','car17':'123724527','moto17':'348329474','goat17':'2689685508','horse17':'603756442',
                 'donkey17':'9251296','flower17':'8625340663','house17':'190216481','dog17':'79892025','tree17':'149989685','bicycle17':'141920780',
                 'ufo17':'907279797','baseball17':'1649781782','football17':'337463120','basketball17':'157831508','hockey17':'737430716','cat18':'947411276',
                 'dog18':'44509737','mouse18':'112388622','parrot18':'2453830939','snake18':'4362326','car18':'75902451','moto18':'2347282813','goat18':'652408797',
                 'horse18':'65086187','donkey18':'330728058','flower18':'223015621','house18':'95607962','dog18':'44509737','tree18':'826499528',
                 'bicycle18':'233261459','ufo18':'164396465','baseball18':'129501547','football18':'2604214600','basketball18':'422929285',
                 'hockey18':'115848041','cat19':'453570275','dog19':'331254466','mouse19':'423100813','parrot19':'2170718231','snake19':'231922827',
                 'car19':'86486090','moto19':'81690581','goat19':'938724087','horse19':'719309188','donkey19':'238194620','flower19':'215447212',
                 'house19':'676497162','dog19':'331254466','tree19':'39949751','bicycle19':'410805300','ufo19':'598212464','baseball19':'466533528',
                 'football19':'83016492','basketball19':'1120102605','hockey19':'5243297238','cat20':'59771678','dog20':'108987112','mouse20':'2310723553',
                 'parrot20':'212609736','snake20':'1814839847','car20':'64758147','moto20':'157685405','goat20':'222592779','horse20':'345885746',
                 'donkey20':'58605040','flower20':'1770273513','house20':'126984900','dog20':'108987112','tree20':'107092614','bicycle20':'2209907196','ufo20':'127035886',
                 'baseball20':'98130112','football20':'217251957','basketball20':'158687989','hockey20':'416420025','cat21':'1588671043','dog21':'698033647',
                 'mouse21':'1085697292','parrot21':'324841712','snake21':'266639357','car21':'100134171','moto21':'4314163911','goat21':'661868439','horse21':'64497018',
                 'donkey21':'2012011962','flower21':'947022712','house21':'1327339495','dog21':'698033647','tree21':'3920173847','bicycle21':'267773349','ufo21':'2922441699',
                 'baseball21':'83768227','football21':'1028257070','basketball21':'1519124724','hockey21':'439017652','cat22':'183136727','dog22':'136017392','mouse22':'472705419',
                 'parrot22':'467453673','snake22':'48944638','car22':'316757335','moto22':'53712833','goat22':'220786953','horse22':'283292997','donkey22':'916734231',
                 'flower22':'352404682','house22':'310507749','dog22':'136017392','tree22':'80388534','bicycle22':'1180888307','ufo22':'271774742','baseball22':'158619442',
                 'football22':'157955065','basketball22':'754667470','hockey22':'91744846','cat23':'80556047','dog23':'193514382','mouse23':'2505733627','parrot23':'463900567',
                 'snake23':'857853320','car23':'61372626','moto23':'133334407','goat23':'203047673','horse23':'14977803891','donkey23':'554249344','flower23':'176412598',
                 'house23':'642680400','dog23':'193514382','tree23':'63031795','bicycle23':'788334703','ufo23':'331855404','baseball23':'819088946','football23':'688855175',
                 'basketball23':'5456674542','hockey23':'768687073','cat24':'1284923936','dog24':'1081339196','mouse24':'627177149','parrot24':'672942709',
                 'snake24':'209335912','car24':'680886412','moto24':'278342249','goat24':'254978165','horse24':'5706486035','donkey24':'339666528',
                 'flower24':'30998438','house24':'47523405','dog24':'1081339196','tree24':'82429347','bicycle24':'336491504','ufo24':'232128408','baseball24':'66879508',
                 'football24':'396752751','basketball24':'520675274','hockey24':'189030943','cat25':'1269595987','dog25':'170070572','mouse25':'801028841','parrot25':'663752552',
                 'snake25':'582925311','car25':'572971439','moto25':'211898787','goat25':'747693962','horse25':'852049968','donkey25':'818134534','flower25':'365643611',
                 'house25':'327535356','dog25':'170070572','tree25':'727336266','bicycle25':'1165613445','ufo25':'150610078','baseball25':'146230693','football25':'281117442',
                 'basketball25':'403036921','hockey25':'3676743766','cat26':'45908234','dog26':'242119266','mouse26':'112633570','parrot26':'114442918','snake26':'402846828',
                 'car26':'182670907','moto26':'203012316','goat26':'116867701','horse26':'1449373984','donkey26':'547461035','flower26':'959683839','house26':'214527849',
                 'dog26':'242119266','tree26':'126453350','bicycle26':'238329823','ufo26':'465557567','baseball26':'160894763','football26':'739773678',
                 'basketball26':'744085567','hockey26':'238592870','cat27':'364693184','dog27':'56063047','mouse27':'303337255','parrot27':'30676377',
                 'snake27':'137962459','car27':'78994992','moto27':'166971973','goat27':'575927750','horse27':'349891712','donkey27':'45145128','flower27':'36925828',
                 'house27':'714299823','dog27':'56063047','tree27':'1692000081','bicycle27':'1945171966','ufo27':'8639551','baseball27':'2879285508','football27':'116266277',
                 'basketball27':'2409352743','hockey27':'179286393','cat28':'144842034','dog28':'52157515','mouse28':'1229737249','parrot28':'964967191',
                 'snake28':'188479106','car28':'371654370','moto28':'155920792','goat28':'156887200','horse28':'146798801','donkey28':'772975699',
                 'flower28':'1523721167','house28':'280413811','dog28':'52157515','tree28':'224663593','bicycle28':'307568864','ufo28':'401865428',
                 'baseball28':'520295707','football28':'79197624','basketball28':'651725235','hockey28':'1211090268','cat29':'202625979','dog29':'64970724',
                 'mouse29':'82416814','parrot29':'499157666','snake29':'104624101','car29':'127902721','moto29':'88151877','goat29':'337388360','horse29':'223060163',
                 'donkey29':'1719386227','flower29':'365860915','house29':'602976359','dog29':'64970724','tree29':'21698973','bicycle29':'1183906924','ufo29':'130574492',
                 'baseball29':'101718111','football29':'88106789','basketball29':'496120625','hockey29':'3930491000','cat30':'95508824','dog30':'53380305',
                 'mouse30':'140971756','parrot30':'710446836','snake30':'374773914','car30':'124508016','moto30':'322630242','goat30':'50813485','horse30':'1608390222',
                 'donkey30':'235860427','flower30':'167644472','house30':'71751173','dog30':'53380305','tree30':'151941335','bicycle30':'999494672','ufo30':'1048405929',
                 'baseball30':'93190427','football30':'269230793','basketball30':'440545871','hockey30':'119152242','cat31':'38040001','dog31':'60634644','mouse31':'77841120',
                 'parrot31':'375802804','snake31':'1226670740','car31':'135468750','moto31':'1094453787','goat31':'240294013','horse31':'1290774768','donkey31':'126766342',
                 'flower31':'156961735','house31':'8559294329','dog31':'60634644','tree31':'545022470','bicycle31':'596667271','ufo31':'954748766','baseball31':'680109323',
                 'football31':'194293728','basketball31':'304661811','hockey31':'1142526203','cat32':'118936279','dog32':'504364096','mouse32':'95792132','parrot32':'549956103',
                 'snake32':'39495607','car32':'182719035','moto32':'233720941','goat32':'324947068','horse32':'147967895','donkey32':'56613589','flower32':'265825258',
                 'house32':'102898963','dog32':'504364096','tree32':'228997616','bicycle32':'3165857099','ufo32':'615368064','baseball32':'2230375206','football32':'98263568',
                 'basketball32':'194673551','hockey32':'98372674','cat33':'72928297','dog33':'69973671','mouse33':'1534541294','parrot33':'231825957','snake33':'383083181',
                 'car33':'324577733','moto33':'569446342','goat33':'205846705','horse33':'72898043','donkey33':'288537138','flower33':'1226775080','house33':'260097882',
                 'dog33':'69973671','tree33':'13556441','bicycle33':'197694541','ufo33':'9046235000','baseball33':'85732710','football33':'102740320','basketball33':'152709978',
                 'hockey33':'850690259','cat34':'109276581','dog34':'412910336','mouse34':'133084559','parrot34':'377915615','snake34':'105108275',
                 'car34':'295455233','moto34':'357607400','goat34':'594958999','horse34':'60045519','donkey34':'368928784','flower34':'205947698',
                 'house34':'65008919','dog34':'412910336','tree34':'89001494','bicycle34':'317450042','ufo34':'92467125','baseball34':'199603992',
                 'football34':'414950551','basketball34':'93722430','hockey34':'325860838','cat35':'345716809','dog35':'321434364','mouse35':'74616828',
                 'parrot35':'1290075107','snake35':'39896590','car35':'1015526651','moto35':'390929011','goat35':'137497312','horse35':'126137454',
                 'donkey35':'499328773','flower35':'67194265','house35':'1196449337','dog35':'321434364','tree35':'310191457','bicycle35':'574821570',
                 'ufo35':'129060359','baseball35':'91111442','football35':'102328333','basketball35':'2387736555','hockey35':'279027642','cat36':'225908124',
                 'dog36':'218955943','mouse36':'363862775','parrot36':'147354596','snake36':'2205061946','car36':'530261687','moto36':'310213542',
                 'goat36':'2117417550','horse36':'521266507','donkey36':'159081911','flower36':'615092221','house36':'5315469220','dog36':'218955943',
                 'tree36':'87626116','bicycle36':'129236225','ufo36':'260084486','baseball36':'2140951825','football36':'141727808','basketball36':'2723171927',
                 'hockey36':'850690259','cat37':'2710331040','dog37':'280513376','mouse37':'106874406','parrot37':'331986507','snake37':'1232593004',
                 'car37':'1036312144','moto37':'771259882','goat37':'248843850','horse37':'123445051','donkey37':'149345564','flower37':'1258306920',
                 'house37':'122285346','dog37':'280513376','tree37':'61039409','bicycle37':'121324622','ufo37':'49675745','baseball37':'622599859',
                 'football37':'788704300','basketball37':'167795302','hockey37':'403917584','cat38':'34806412','dog38':'53058874','mouse38':'274864659',
                 'parrot38':'149847684','snake38':'62616914','car38':'73489525','moto38':'196528943','goat38':'392869022','horse38':'728363434',
                 'donkey38':'185966441','flower38':'2103890235','house38':'140043871','dog38':'53058874','tree38':'50857178','bicycle38':'651936830',
                 'ufo38':'144158763','baseball38':'145924779','football38':'229307491','basketball38':'62490936','hockey38':'219342414','cat39':'84834584',
                 'dog39':'61450375','mouse39':'91226322','parrot39':'216047818','snake39':'217292849','car39':'198553511','moto39':'207972185','goat39':'86079877',
                 'horse39':'529740821','donkey39':'464448278','flower39':'469806380','house39':'417740814','dog39':'61450375','tree39':'129578387',
                 'bicycle39':'197219462','ufo39':'576220033','baseball39':'495138142','football39':'336285651','basketball39':'2239791714','hockey39':'236470850',
                 'cat40':'84808714','dog40':'72498636','mouse40':'162478917','parrot40':'292100413','snake40':'684259537','car40':'713432855','moto40':'155955748',
                 'goat40':'640177802','horse40':'396613373','donkey40':'86847566','flower40':'528229171','house40':'17305282','dog40':'72498636','tree40':'83138023',
                 'bicycle40':'101728743','ufo40':'26290557','baseball40':'1312615104','football40':'146460318','basketball40':'22599162',
                 'hockey40':'270572844','cat41':'34019850','dog41':'364483243','mouse41':'111194817','parrot41':'90861292','snake41':'476682171',
                 'car41':'52631405','moto41':'46046270','goat41':'125800979','horse41':'3746260340','donkey41':'408486702','flower41':'2806383761',
                 'house41':'88786861','dog41':'364483243','tree41':'286032042','bicycle41':'367782794','ufo41':'51461442','baseball41':'2122177193',
                 'football41':'209351359','basketball41':'1038901059','hockey41':'817793317','cat42':'97133355','dog42':'157429508','mouse42':'103211474',
                 'parrot42':'220919043','snake42':'36104847','car42':'332273457','moto42':'177773222','goat42':'854576489','horse42':'584528836',
                 'donkey42':'62963897','flower42':'80593170','house42':'54245661','dog42':'157429508','tree42':'28619498','bicycle42':'204511354',
                 'ufo42':'3538252684','baseball42':'2329542049','football42':'39391025','basketball42':'49791238','hockey42':'439532364','cat43':'167951386',
                 'dog43':'65440328','mouse43':'379722936','parrot43':'199773636','snake43':'1201691262','car43':'91028647','moto43':'41700718',
                 'goat43':'244881272','horse43':'999647235','donkey43':'257922666','flower43':'351666932','house43':'296424919','dog43':'65440328',
                 'tree43':'164968883','bicycle43':'142111079','ufo43':'93570019','baseball43':'85561202','football43':'570430164','basketball43':'972413355',
                 'hockey43':'210350018','cat44':'2234541295','dog44':'57233316','mouse44':'1500289370','parrot44':'384995962','snake44':'1185503404',
                 'car44':'76586824','moto44':'139854496','goat44':'34058420','horse44':'60303816','donkey44':'3571723904','flower44':'140907160',
                 'house44':'3859493695','dog44':'57233316','tree44':'35141924','bicycle44':'630457812','ufo44':'686521146','baseball44':'53823116',
                 'football44':'289860274','basketball44':'1111042175','hockey44':'118957916','cat45':'351857297','dog45':'134953825','mouse45':'165282729',
                 'parrot45':'22359225','snake45':'403965998','car45':'41589676','moto45':'381787331','goat45':'4313293950','horse45':'254162886',
                 'donkey45':'42765984','flower45':'3195555257','house45':'3373765963','dog45':'134953825','tree45':'167032875','bicycle45':'513802741',
                 'ufo45':'268879569','baseball45':'1766545884','football45':'10645598','basketball45':'2120563229','hockey45':'3857565592','cat46':'89566150',
                 'dog46':'136212779','mouse46':'13564799','parrot46':'288166348','snake46':'106268522','car46':'47742121','moto46':'43532592',
                 'goat46':'151663114','horse46':'418102780','donkey46':'741724299','flower46':'84841918','house46':'582922673','dog46':'136212779',
                 'tree46':'50164560','bicycle46':'388946359','ufo46':'20113693','baseball46':'197972019','football46':'8803923','basketball46':'8015023',
                 'hockey46':'206856980','cat47':'56235965','dog47':'142622369','mouse47':'90875240','parrot47':'78094091','snake47':'24743255',
                 'car47':'1270192097','moto47':'286685125','goat47':'61753239','horse47':'79923598','donkey47':'254743805','flower47':'299612228',
                 'house47':'1088091968','dog47':'142622369','tree47':'69611714','bicycle47':'316608458','ufo47':'314207874','baseball47':'1563042930',
                 'football47':'317187452','basketball47':'1018093449','hockey47':'142190835','cat48':'56235965','dog48':'160581136','mouse48':'62650643',
                 'parrot48':'124239555','snake48':'104162302','car48':'755867303','moto48':'101861611','goat48':'103943668','horse48':'708610580',
                 'donkey48':'483965988','flower48':'568213147','house48':'45704879','dog48':'160581136','tree48':'20630633','bicycle48':'71580091',
                 'ufo48':'335142555','baseball48':'3385570249','football48':'78666192','basketball48':'225750592','hockey48':'795834182','cat49':'337344063',
                 'dog49':'26513252','mouse49':'17986670','parrot49':'27289170','snake49':'318180279','car49':'20783353','moto49':'26908076',
                 'goat49':'2056580929','horse49':'694819438','donkey49':'206835101','flower49':'71537041','house49':'146737985','dog49':'26513252',
                 'tree49':'245729262','bicycle49':'59049056','ufo49':'359477075','baseball49':'65545755','football49':'125678302','basketball49':'650596356',
                 'hockey49':'67878952','cat50':'201141309','dog50':'429554224','mouse50':'230326696','parrot50':'412243448','snake50':'34688595',
                 'car50':'30509558','moto50':'142120151','goat50':'177009738','horse50':'144556271','donkey50':'229990272','flower50':'905808416',
                 'house50':'1527564620','dog50':'429554224','tree50':'1520855527','bicycle50':'96609121','ufo50':'347184849','baseball50':'481941868',
                 'football50':'690432031','basketball50':'19239018','hockey50':'665331228'}
   
     
  

    const fruits = [];

    for (let i = 0; i < 50; i++) {
        var ran_int = int_list[Math.floor(Math.random()*int_list.length)];
        var ran_ani = animals[Math.floor(Math.random()*animals.length)];
        console.log(ran_ani+ran_int);

        ran_num = ran_ani+ran_int;

        json_data[ran_num]

        if (json_data[ran_num] % 2 == 0) {
            fruits.push(ones[Math.floor(Math.random()*ones.length)]);
        }

        if (json_data[ran_num] % 2 == 1) {
                fruits.push(twos[Math.floor(Math.random()*twos.length)]);
            }
        
      }


      for (let i = 0; i < 49; i++) {
        var ran_int = int_list[Math.floor(Math.random()*int_list.length)];
        var ran_ani = animals[Math.floor(Math.random()*animals.length)];
        console.log(ran_ani+ran_int);

        ran_num = ran_ani+ran_int;

        json_data[ran_num]

        if (json_data[ran_num] % 2 == 0) {
            fruits.pop();
        }

        if (json_data[ran_num] % 2 == 1) {
                fruits.shift();
            }
        
      }

    
    
    alert(fruits)



            
            
            
             

    if (fruits == 'Arizona Diamondbacks') {
        //greeting = "Good day";
        alert("we r here");
      }
      
      if (fruits == 'Atlanta Braves') {
        //greeting = "Good day";
        alert("1");
      }

      if (fruits == 'Baltimore Orioles') {
        //greeting = "Good day";
        alert("2");
      }

      if (fruits == 'Boston Red Sox') {
        //greeting = "Good day";
        alert("3");
      }

      if (fruits == 'Chicago Cubs') {
        //greeting = "Good day";
        alert("4");
      }

      if (fruits == 'Chicago White Sox') {
        //greeting = "Good day";
        alert("5");
      }

      if (fruits == 'Cincinnati Reds') {
        //greeting = "Good day";
        alert("6");
      }

      if (fruits == 'Cleveland Guardians') {
        //greeting = "Good day";
        alert("7");
      }

      if (fruits == 'Colorado Rockies') {
        //greeting = "Good day";
        alert("1");
      }

      if (fruits == 'Detroit Tigers') {
        //greeting = "Good day";
        alert("2");
      }

      if (fruits == 'Houston Astros') {
        //greeting = "Good day";
        alert("3");
      }

      if (fruits == 'Kansas City Royals') {
        //greeting = "Good day";
        alert("4");
      }

      if (fruits == 'Los Angeles Angels') {
        //greeting = "Good day";
        alert("5");
      }

      if (fruits == 'Los Angeles Dodgers') {
        //greeting = "Good day";
        alert("6");
      }

      if (fruits == 'Miami Marlins') {
        //greeting = "Good day";
        alert("7");
      }

      if (fruits == 'Milwaukee Brewers') {
        //greeting = "Good day";
        alert("1");
      }

      if (fruits == 'Minnesota Twins') {
        //greeting = "Good day";
        alert("2");
      }

      if (fruits == 'New York Mets') {
        //greeting = "Good day";
        alert("3");
      }

      if (fruits == 'New York Yankees') {
        //greeting = "Good day";
        alert("4");
      }

      if (fruits == 'Oakland Athletics') {
        //greeting = "Good day";
        alert("5");
      }

      if (fruits == 'Philadelphia Phillies') {
        //greeting = "Good day";
        alert("6");
      }

      if (fruits == 'Pittsburgh Pirates') {
        //greeting = "Good day";
        alert("7");
      }

      if (fruits == 'San Diego Padres') {
        //greeting = "Good day";
        alert("1");
      }

      if (fruits == 'San Francisco Giants') {
        //greeting = "Good day";
        alert("2");
      }

      if (fruits == 'Seattle Mariners') {
        //greeting = "Good day";
        alert("3");
      }

      if (fruits == 'St. Louis Cardinals') {
        //greeting = "Good day";
        alert("4");
      }

      if (fruits == 'Tampa Bay Rays') {
        //greeting = "Good day";
        alert("5");
      }

      if (fruits == 'Texas Rangers') {
        //greeting = "Good day";
        alert("6");
      }

      if (fruits == 'Toronto Blue Jays') {
        //greeting = "Good day";
        alert("7");
      }

      if (fruits == 'Washington Nationals') {
        //greeting = "Good day";
        alert("1");
      }

    
  
    if (fruits == 'Diamondbacks') {
        alert("1");
    }

    if (fruits == 'Braves') {
        alert("2");
    }

    if (fruits == 'Orioles') {
        alert("3");
    }

    if (fruits == 'Red Sox') {
        alert("4");
    }

    if (fruits == 'Cubs') {
        alert("5");
    }

    if (fruits == 'White Sox') {
        alert("6");
    }

    if (fruits == 'Reds') {
        alert("7");
    }


    if (fruits == 'Guardians') {
        alert("1");
    }

    if (fruits == 'Rockies') {
        alert("2");
    }

    if (fruits == 'Tigers') {
        alert("3");
    }

    if (fruits == 'Astros') {
        alert("4");
    }

    if (fruits == 'Royals') {
        alert("5");
    }

    if (fruits == 'Angels') {
        alert("6");
    }

    if (fruits == 'Dodgers') {
        alert("7");
    }

    if (fruits == 'Marlins') {
        alert("1");
    }

    if (fruits == 'Brewers') {
        alert("2");
    }

    if (fruits == 'Twins') {
        alert("3");
    }

    if (fruits == 'Mets') {
        alert("4");
    }

    if (fruits == 'Yankees') {
        alert("5");
    }

    if (fruits == 'Athletics') {
        alert("6");
    }

    if (fruits == 'Phillies') {
        alert("7");
    }

    if (fruits == 'Pirates') {
        alert("1");
    }

    if (fruits == 'Padres') {
        alert("2");
    }

    if (fruits == 'Giants') {
        alert("3");
    }

    if (fruits == 'Mariners') {
        alert("4");
    }

    if (fruits == 'Cardinals') {
        alert("5");
    }

    if (fruits == 'Rays') {
        alert("6");
    }

    if (fruits == 'Rangers') {
        alert("7");
    }

    if (fruits == 'Blue Jays') {
        alert("1");
    }

    if (fruits == 'Nationals') {
        alert("2");
    }

    
            
}