const sampleData = [
    {'localityname': 'Sarita Vihar', 'localityId': 'ZWL005764'}, 
    {'localityname': 'Faridabad Sector 41-50', 'localityId': 'ZWL008752'}, 
    {'localityname': 'New Friends Colony', 'localityId': 'ZWL005996'}, 
    {'localityname': 'Sector 26 (Noida)', 'localityId': 'ZWL005243'}, 
    {'localityname': 'New Industrial Town', 'localityId': 'ZWL009032'}, 
    {'localityname': 'Tilak Nagar', 'localityId': 'ZWL005428'}, 
    {'localityname': 'Sector 10, Gurgaon', 'localityId': 'ZWL001073'}, 
    {'localityname': 'Ashok Vihar, Delhi', 'localityId': 'ZWL001319'}, 
    {'localityname': 'Kalkaji', 'localityId': 'ZWL004800'}, 
    {'localityname': 'Sector 53', 'localityId': 'ZWL003118'}, 
    {'localityname': 'Sector 49', 'localityId': 'ZWL002091'}, 
    {'localityname': 'Vasundhara', 'localityId': 'ZWL002662'}, 
    {'localityname': 'Rajinder Nagar', 'localityId': 'ZWL001404'}, 
    {'localityname': 'Safdarjung Enclave', 'localityId': 'ZWL008963'}, 
    {'localityname': 'Connaught Place', 'localityId': 'ZWL006538'}, 
    {'localityname': 'Sector 66', 'localityId': 'ZWL003075'}, 
    {'localityname': 'Sector 57', 'localityId': 'ZWL003721'}, 
    {'localityname': 'Moti Bagh, Delhi', 'localityId': 'ZWL006396'}, 
    {'localityname': 'Patel Nagar, Delhi', 'localityId': 'ZWL004535'}, 
    {'localityname': 'Greater Noida', 'localityId': 'ZWL008554'}, 
    {'localityname': 'Karkardooma, Delhi', 'localityId': 'ZWL004533'}, 
    {'localityname': 'Tigaon', 'localityId': 'ZWL002179'}, 
    {'localityname': 'Sector 50 (Noida)', 'localityId': 'ZWL007487'}, 
    {'localityname': 'Vasant Kunj, Delhi', 'localityId': 'ZWL007120'}, 
    {'localityname': 'Dwarka, Delhi', 'localityId': 'ZWL007486'}, 
    {'localityname': 'Sector 15', 'localityId': 'ZWL006287'}, 
    {'localityname': 'Mayur Vihar Phase III', 'localityId': 'ZWL002146'}, 
    {'localityname': 'Crossing Republik', 'localityId': 'ZWL008405'}, 
    {'localityname': 'Sector 28', 'localityId': 'ZWL004455'}, 
    {'localityname': 'Palam Vihar, Gurgaon', 'localityId': 'ZWL005087'}, 
    {'localityname': 'Sector 63 (Noida)', 'localityId': 'ZWL009648'}, 
    {'localityname': 'Raj Nagar, Ghaziabad', 'localityId': 'ZWL008317'}, 
    {'localityname': 'Sector 128', 'localityId': 'ZWL005878'}, 
    {'localityname': 'Sector 56, Gurgaon', 'localityId': 'ZWL003241'}, 
    {'localityname': 'Indirapuram', 'localityId': 'ZWL007224'}, 
    {'localityname': 'Malviya Nagar', 'localityId': 'ZWL009834'}, 
    {'localityname': 'Sector 43, Gurgaon', 'localityId': 'ZWL007284'}, 
    {'localityname': 'Sector 120 (Noida)', 'localityId': 'ZWL006738'}, 
    {'localityname': 'Saket', 'localityId': 'ZWL007329'}, 
    {'localityname': 'Sector 18 (Noida)', 'localityId': 'ZWL001752'}, 
    {'localityname': 'Naraina', 'localityId': 'ZWL007594'}, 
    {'localityname': 'Patparganj', 'localityId': 'ZWL006116'}, 
    {'localityname': 'Ghitorni', 'localityId': 'ZWL009925'},
     {'localityname': 'Faridabad Sector 1-11', 'localityId': 'ZWL009335'}, 
    {'localityname': 'Sector 24', 'localityId': 'ZWL009638'}, 
    {'localityname': 'Rajouri Garden', 'localityId': 'ZWL005670'}, 
    {'localityname': 'Vishnu Garden', 'localityId': 'ZWL003757'}, 
    {'localityname': 'Sector 48, Gurgaon', 'localityId': 'ZWL003610'}, 
    {'localityname': 'Kirti Nagar', 'localityId': 'ZWL005971'}, 
    {'localityname': 'Faridabad Sector 81-89', 'localityId': 'ZWL003626'}, 
    {'localityname': 'GK I', 'localityId': 'ZWL005876'}, 
    {'localityname': 'Mohan Estate', 'localityId': 'ZWL006295'}, 
    {'localityname': 'Mukherjee Nagar', 'localityId': 'ZWL007653'}, 
    {'localityname': 'Mehrauli', 'localityId': 'ZWL006697'}, 
    {'localityname': 'Burari', 'localityId': 'ZWL003259'}, 
    {'localityname': 'Gaur city, Ghaziabad', 'localityId': 'ZWL004759'}, 
    {'localityname': 'GK II', 'localityId': 'ZWL004477'}, 
    {'localityname': 'Rohini', 'localityId': 'ZWL005077'}, 
    {'localityname': 'Rangpuri', 'localityId': 'ZWL008191'}, 
    {'localityname': 'Sector 46', 'localityId': 'ZWL006092'}, 
    {'localityname': 'Sector 62 (Noida)', 'localityId': 'ZWL001549'}, 
    {'localityname': 'Shalimar Bagh', 'localityId': 'ZWL001036'}, 
    {'localityname': 'Model Town', 'localityId': 'ZWL006996'},
     {'localityname': 'Faridabad Sector 16-20', 'localityId': 'ZWL007566'}, 
     {'localityname': 'Sector 2 (Noida)', 'localityId': 'ZWL009852'}, 
     {'localityname': 'Govindpuram', 'localityId': 'ZWL008648'}, 
     {'localityname': 'Gwal Pahari', 'localityId': 'ZWL009728'}, 
     {'localityname': 'Nehru Nagar', 'localityId': 'ZWL006868'}, 
    {'localityname': 'Chittaranjan Park', 'localityId': 'ZWL002067'}, 
    {'localityname': 'IMT Manesar', 'localityId': 'ZWL008791'}, 
    {'localityname': 'Sector 73 Z Kitchen', 'localityId': 'ZWL003043'}, 
    {'localityname': 'Sector 51', 'localityId': 'ZWL004159'}, 
    {'localityname': 'Ballabhgarh', 'localityId': 'ZWL005960'}, 
    {'localityname': 'Nangloi', 'localityId': 'ZWL009293'}, 
    {'localityname': 'Uttam Nagar', 'localityId': 'ZWL001663'}, 
    {'localityname': 'Sector 47', 'localityId': 'ZWL005762'}, 
    {'localityname': 'Paharganj', 'localityId': 'ZWL005345'}, 
    {'localityname': 'Sector 25', 'localityId': 'ZWL008225'}, 
    {'localityname': 'Pitampura', 'localityId': 'ZWL001933'}, 
    {'localityname': 'Shahdara', 'localityId': 'ZWL003591'}, 
    {'localityname': 'Sector 31', 'localityId': 'ZWL007061'}, 
    {'localityname': 'Sector 23', 'localityId': 'ZWL008476'}, 
    {'localityname': 'Sector 12 (Noida)', 'localityId': 'ZWL009008'},
     {'localityname': 'Mayur Vihar Phase II', 'localityId': 'ZWL005323'}, 
     {'localityname': 'Faridabad Sector 12-15', 'localityId': 'ZWL001412'}, 
     {'localityname': 'DLF PHASE 1 (SECTOR 26)', 'localityId': 'ZWL005925'}, 
     {'localityname': 'Laxmi Nagar', 'localityId': 'ZWL008716'}, 
     {'localityname': 'Karol Bagh', 'localityId': 'ZWL009339'}, 
     {'localityname': 'Chhatarpur', 'localityId': 'ZWL009096'}, 
     {'localityname': 'Paschim Vihar', 'localityId': 'ZWL006720'}, 
     {'localityname': 'Sector 1, Noida', 'localityId': 'ZWL002908'}, 
     {'localityname': 'South Extension I', 'localityId': 'ZWL001186'}, 
     {'localityname': 'Sector 18', 'localityId': 'ZWL004789'}, 
     {'localityname': 'Kamla Nagar', 'localityId': 'ZWL008978'}, 
     {'localityname': 'Janakpuri', 'localityId': 'ZWL007903'}, 
     {'localityname': 'Vikaspuri', 'localityId': 'ZWL008897'}, 
     {'localityname': 'Najafgarh', 'localityId': 'ZWL007431'}, 
     {'localityname': 'Mayur Vihar Phase 1', 'localityId': 'ZWL001112'}, 
     {'localityname': 'Sez Noida 1', 'localityId': 'ZWL008649'},
      {'localityname': 'Gulavali, Noida', 'localityId': 'ZWL006384'}, 
      {'localityname': 'Sector 14', 'localityId': 'ZWL007840'}, 
      {'localityname': 'Sector 76(Noida)', 'localityId': 'ZWL002072'}, 
    {'localityname': 'Green Park', 'localityId': 'ZWL003077'}, 
    {'localityname': 'Munirka', 'localityId': 'ZWL005395'}, 
    {'localityname': 'NEHRU PLACE', 'localityId': 'ZWL005729'}, 
    {'localityname': 'Lajpat Nagar', 'localityId': 'ZWL005736'}, 
    {'localityname': 'Sector 52 (Noida)', 'localityId': 'ZWL007212'}, 
    {'localityname': 'Sector 100 (Noida)', 'localityId': 'ZWL004803'}, 
    {'localityname': 'Sector 50', 'localityId': 'ZWL003444'}, 
    {'localityname': 'Dilshad Garden', 'localityId': 'ZWL008293'}, 
    {'localityname': 'Sector 29, Gurgaon', 'localityId': 'ZWL007308'}, 
    {'localityname': 'SUSHANT LOK 1', 'localityId': 'ZWL008219'}, 
    {'localityname': 'SAHIBABAD', 'localityId': 'ZWL006234'},
     {'localityname': 'Sector 45 (Noida)', 'localityId': 'ZWL007666'}, 
     {'localityname': 'Sector 84', 'localityId': 'ZWL002490'}, 
     {'localityname': 'Sector 7, Gurgaon', 'localityId': 'ZWL007138'}, 
     {'localityname': 'Sector 27', 'localityId': 'ZWL009706'}, 
     {'localityname': 'Hauz Khas', 'localityId': 'ZWL001267'}, 
     {'localityname': 'Jangpura', 'localityId': 'ZWL003552'}, 
     {'localityname': 'Sector 52, Gurgaon', 'localityId': 'ZWL008401'}, 
     {'localityname': 'Vaishali, Ghaziabad', 'localityId': 'ZWL001758'}, 
    {'localityname': 'Shibpur', 'localityId': 'ZWL003128'}, 
    {'localityname': 'Kalyani 1, Kolkata', 'localityId': 'ZWL004322'}, 
    {'localityname': 'Bansdroni', 'localityId': 'ZWL002495'}, 
    {'localityname': 'Bow Barracks', 'localityId': 'ZWL009257'}, 
    {'localityname': 'Baranagar, Kolkata', 'localityId': 'ZWL005435'}, 
    {'localityname': 'Sonarpur, Kolkata', 'localityId': 'ZWL007041'}, 
    {'localityname': 'Ballygunge', 'localityId': 'ZWL002918'}, 
    {'localityname': 'Sinthi, Kolkata', 'localityId': 'ZWL003388'}, 
    {'localityname': 'Salt Lake 2', 'localityId': 'ZWL008806'}, 
    {'localityname': 'Alipore', 'localityId': 'ZWL008635'},
     {'localityname': 'Baguihati', 'localityId': 'ZWL002312'},
      {'localityname': 'South Dum Dum', 'localityId': 'ZWL001499'}, 
      {'localityname': 'Purba Barisha', 'localityId': 'ZWL003315'}, 
      {'localityname': 'Jadavpur', 'localityId': 'ZWL003794'}, 
      {'localityname': 'Tollygunge', 'localityId': 'ZWL006574'},
       {'localityname': 'Shyam Bazar', 'localityId': 'ZWL004138'}, 
       {'localityname': 'Behala', 'localityId': 'ZWL009022'}, 
       {'localityname': 'Chandannagar, Kolkata', 'localityId': 'ZWL003271'}, 
       {'localityname': 'Barrackpore', 'localityId': 'ZWL003951'}, 
       {'localityname': 'East Kolkata Township', 'localityId': 'ZWL003915'}, 
       {'localityname': 'Bhowanipore', 'localityId': 'ZWL006750'}, 
       {'localityname': 'Elgin', 'localityId': 'ZWL008828'}, 
       {'localityname': 'Howrah', 'localityId': 'ZWL008426'}, 
       {'localityname': 'New Alipore', 'localityId': 'ZWL007323'}, 
       {'localityname': 'Barasat', 'localityId': 'ZWL006266'}, 
       {'localityname': 'New Town (kolkata)', 'localityId': 'ZWL008393'}, 
       {'localityname': 'Uttarpara', 'localityId': 'ZWL007966'}, 
       {'localityname': 'Santoshpur', 'localityId': 'ZWL001039'}, 
       {'localityname': 'Liluah', 'localityId': 'ZWL003882'}, 
       {'localityname': 'Rajarhat', 'localityId': 'ZWL004925'}, 
       {'localityname': 'Park Street area', 'localityId': 'ZWL005244'}, {'localityname': 'Baghajatin Colony', 'localityId': 'ZWL003687'}, {'localityname': 'Shrirampur', 'localityId': 'ZWL008120'}, {'localityname': 'Chhota Jagulia', 'localityId': 'ZWL007514'}, 
    {'localityname': 'Dum Dum', 'localityId': 'ZWL003935'}, 
    {'localityname': 'Kestopur', 'localityId': 'ZWL002931'}, 
    {'localityname': 'Sodepur', 'localityId': 'ZWL006521'}, {'localityname': 'Nimta', 'localityId': 'ZWL005558'}, {'localityname': 'Shapoorji', 'localityId': 'ZWL005174'}, {'localityname': 'Barabazar Market', 'localityId': 'ZWL002488'}, {'localityname': 'Salt Lake 1', 'localityId': 'ZWL007934'}, {'localityname': 'Tangra', 'localityId': 'ZWL001584'}, {'localityname': 'Gariahat', 'localityId': 'ZWL005429'}, {'localityname': 'Santragachi', 'localityId': 'ZWL005121'}, {'localityname': 'Garia', 'localityId': 'ZWL007830'}, {'localityname': 'Chinsurah, Kolkata', 'localityId': 'ZWL008991'}, 
    {'localityname': 'Kankurgachi', 'localityId': 'ZWL009194'}, {'localityname': 'Kasba', 'localityId': 'ZWL004722'}, {'localityname': 'Mira Road East', 'localityId': 'ZWL006536'}, {'localityname': 'Kandivali West', 'localityId': 'ZWL004934'}, {'localityname': 'Boisar, Mumbai', 'localityId': 'ZWL004821'}, {'localityname': 'Bhiwandi', 'localityId': 'ZWL007249'}, {'localityname': 'Panvel', 'localityId': 'ZWL001164'}, {'localityname': 'Kopar Khairane (Navi Mumbai)', 'localityId': 'ZWL009537'}, {'localityname': 'Vashi', 'localityId': 'ZWL007275'}, {'localityname': 'Titwala, Mumbai', 'localityId': 'ZWL002556'}, {'localityname': 'Kandivali East', 'localityId': 'ZWL006937'}, {'localityname': 'Nalasopara', 'localityId': 'ZWL008636'}, {'localityname': 'Lower Parel', 'localityId': 'ZWL003995'}, {'localityname': 'Goregaon East', 'localityId': 'ZWL006938'}, {'localityname': 'Santacruz East', 'localityId': 'ZWL008550'}, {'localityname': 'Ghatkopar East, Mumbai', 'localityId': 'ZWL004494'}, {'localityname': 'Palava', 'localityId': 'ZWL003708'}, {'localityname': 'Malad West', 'localityId': 'ZWL008711'}, {'localityname': 'Borivali East', 'localityId': 'ZWL005991'}, {'localityname': 'Kalyan,West,Mumbai', 'localityId': 'ZWL002865'}, {'localityname': 'Santacruz West', 'localityId': 'ZWL004749'}, {'localityname': 'Badlapur, Mumbai', 'localityId': 'ZWL001274'}, {'localityname': 'Ambernath', 'localityId': 'ZWL007699'}, {'localityname': 'Marine lines', 'localityId': 'ZWL001764'}, {'localityname': 'Mulund West', 'localityId': 'ZWL002921'}, {'localityname': 'Airoli', 'localityId': 'ZWL001410'}, {'localityname': 'Kharghar (Navi Mumbai)', 'localityId': 'ZWL009757'}, {'localityname': 'Ulhasnagar (Mumbai)', 'localityId': 'ZWL002059'}, {'localityname': 'Ghatkopar West, Mumbai', 'localityId': 'ZWL001058'}, 
    {'localityname': 'Bandra West', 'localityId': 'ZWL006995'}, {'localityname': 'Dadar West', 'localityId': 'ZWL004692'}, {'localityname': 'Andheri West', 'localityId': 'ZWL007667'}, {'localityname': 'Vile Parle West', 'localityId': 'ZWL009338'}, 
    {'localityname': 'Byculla', 'localityId': 'ZWL009167'}, {'localityname': 'Vasai', 'localityId': 'ZWL006032'}, {'localityname': 'Kalyan,East (Mumbai)', 'localityId': 'ZWL007397'}, {'localityname': 'Ulwe, Mumbai', 'localityId': 'ZWL009360'}, {'localityname': 'Fort', 'localityId': 'ZWL002205'}, {'localityname': 'Andheri East', 'localityId': 'ZWL008975'}, {'localityname': 'Chembur', 'localityId': 'ZWL009252'}, {'localityname': 'Palghar, Mumbai', 'localityId': 'ZWL002558'}, {'localityname': 'Mumbra, Mumbai', 'localityId': 'ZWL002742'}, {'localityname': 'Mulund East', 'localityId': 'ZWL004971'}, {'localityname': 'Shirdhon, Mumbai', 'localityId': 'ZWL008348'}, {'localityname': 'Virar', 'localityId': 'ZWL001344'}, {'localityname': 'Tardeo', 'localityId': 'ZWL007606'}, {'localityname': 'Bandra East', 'localityId': 'ZWL005697'}, {'localityname': 'Thane West', 'localityId': 'ZWL005442'}, {'localityname': 'Kurla West', 'localityId': 'ZWL004189'}, {'localityname': 'Goregaon West', 'localityId': 'ZWL005000'}, {'localityname': 'Hiranandani Estate', 'localityId': 'ZWL002056'}, {'localityname': 'Dombivli', 'localityId': 'ZWL009826'}, {'localityname': 'Bhandup West', 'localityId': 'ZWL007889'}, {'localityname': 'Kamothe', 'localityId': 'ZWL008977'}, {'localityname': 'Powai, Mumbai', 'localityId': 'ZWL006622'}, {'localityname': 'Naupada', 'localityId': 'ZWL002074'}, {'localityname': 'Bhayandar West', 'localityId': 'ZWL008874'}, {'localityname': 'Vileparle East', 'localityId': 'ZWL001334'}, {'localityname': 'Sion', 'localityId': 'ZWL008378'}, {'localityname': 'Nerul (Navi Mumbai)', 'localityId': 'ZWL007690'}, {'localityname': 'Dahisar West', 'localityId': 'ZWL007706'}, {'localityname': 'Colaba', 'localityId': 'ZWL005320'}, {'localityname': 'Mahim', 'localityId': 'ZWL006544'}, {'localityname': 'Wadala', 'localityId': 'ZWL002686'}, {'localityname': 'Borivali West', 'localityId': 'ZWL001089'}, 
    {'localityname': 'Palava Lakeshore,Mumbai', 'localityId': 'ZWL008360'}, {'localityname': 'Banashankari', 'localityId': 'ZWL003467'}, {'localityname': 'Rajarajeshwari Nagar', 'localityId': 'ZWL004900'}, {'localityname': 'JP Nagar', 'localityId': 'ZWL005530'}, {'localityname': 'Mahadevapura', 'localityId': 'ZWL007643'}, {'localityname': 'Jalahalli', 'localityId': 'ZWL003159'}, {'localityname': 'RT Nagar', 'localityId': 'ZWL002736'}, {'localityname': 'KR Puram', 'localityId': 'ZWL006369'}, {'localityname': 'Electronic City', 'localityId': 'ZWL006274'}, {'localityname': 'Vijayanagar', 'localityId': 'ZWL005375'}, {'localityname': 'Marathahalli', 'localityId': 'ZWL008600'}, {'localityname': 'Sarjapur road', 'localityId': 'ZWL002292'}, {'localityname': 'Brookefields', 'localityId': 'ZWL004341'}, {'localityname': 'Whitefield', 'localityId': 'ZWL007633'}, {'localityname': 'Nagavara', 'localityId': 'ZWL009212'}, {'localityname': 'New BEL Road', 'localityId': 'ZWL007628'}, {'localityname': 'Koramangala', 'localityId': 'ZWL001156'}, {'localityname': 'Bannerghatta Road, Bangalore', 'localityId': 'ZWL004924'}, {'localityname': 'Aavalahalli', 'localityId': 'ZWL009229'}, {'localityname': 'BIAL Airport Road', 'localityId': 'ZWL005576'}, {'localityname': 'Yelahanka', 'localityId': 'ZWL006658'}, {'localityname': 'Kadugodi', 'localityId': 'ZWL002882'}, {'localityname': 'Kammanahalli', 'localityId': 'ZWL006631'}, {'localityname': 'HSR Layout', 'localityId': 'ZWL001196'}, {'localityname': 'BTM Layout', 'localityId': 'ZWL006600'}, {'localityname': 'Varthur', 'localityId': 'ZWL006854'}, {'localityname': 'Indiranagar', 'localityId': 'ZWL001273'}, {'localityname': 'Jayanagar', 'localityId': 'ZWL008105'}, {'localityname': 'Sahakaranagar', 'localityId': 'ZWL005206'}, 
    {'localityname': 'Devanahalli, Bangalore', 'localityId': 'ZWL008797'}, {'localityname': 'MG Road', 'localityId': 'ZWL001962'}, {'localityname': 'Rajajinagar', 'localityId': 'ZWL006844'}, {'localityname': 'Bellandur', 'localityId': 'ZWL004164'}, {'localityname': 'NIGDI(Pune)', 'localityId': 'ZWL007698'}, {'localityname': 'Bibvewadi (Pune)', 'localityId': 'ZWL005773'}, {'localityname': 'Nanded-Nahre', 'localityId': 'ZWL009577'}, {'localityname': 'Bhosari (Pune)', 'localityId': 'ZWL002253'}, {'localityname': 'Camp Area', 'localityId': 'ZWL003498'}, {'localityname': 'Magarpatta', 'localityId': 'ZWL004311'}, {'localityname': 'Pimpri', 'localityId': 'ZWL007801'}, {'localityname': 'Yerwada', 'localityId': 'ZWL008134'}, {'localityname': 'Kalyani Nagar (Pune)', 'localityId': 'ZWL009625'}, {'localityname': 'Sus, Pune', 'localityId': 'ZWL001627'}, {'localityname': 'Bavdhan', 'localityId': 'ZWL006236'}, 
    {'localityname': 'Viman nagar', 'localityId': 'ZWL006743'}, {'localityname': 'Aundh (Pune)', 'localityId': 'ZWL004927'}, {'localityname': 'Katraj (Pune)', 'localityId': 'ZWL008370'}, {'localityname': 'Pimple Saudagar_Pune', 'localityId': 'ZWL004523'}, {'localityname': 'Dhanori', 'localityId': 'ZWL001778'}, {'localityname': 'Dehu Road', 'localityId': 'ZWL003386'}, {'localityname': 'Koregaon Park (Pune)', 'localityId': 'ZWL009157'}, {'localityname': 'Hinjewadi - Phase 2', 'localityId': 'ZWL004962'}, {'localityname': 'Wakad_Pune', 'localityId': 'ZWL005340'}, {'localityname': 'Manas Lake, Pune', 'localityId': 'ZWL009671'}, {'localityname': 'Sadashiv Peth', 'localityId': 'ZWL008921'}, {'localityname': 'Ghorpadi (Pune)', 'localityId': 'ZWL008940'}, {'localityname': 'Pashan (Pune)', 'localityId': 'ZWL009874'}, {'localityname': 'SP Infocity, Pune', 'localityId': 'ZWL006660'}, {'localityname': 'Manjri,Pune', 'localityId': 'ZWL003813'}, {'localityname': 'Khadki, Pune', 'localityId': 'ZWL007471'}, {'localityname': 'Kothrud (Pune)', 'localityId': 'ZWL009602'}, {'localityname': 'Sinhagad Road(Pune)', 'localityId': 'ZWL002208'}, {'localityname': 'New Sangvi, Pune', 'localityId': 'ZWL007895'}, {'localityname': 'Nimgaon, Pune', 'localityId': 'ZWL003099'}, {'localityname': 'Wagholi', 'localityId': 'ZWL004575'}, {'localityname': 'Keshavnagar, Pune', 'localityId': 'ZWL004513'}, {'localityname': 'Baner (Pune)', 'localityId': 'ZWL008983'}, {'localityname': 'Warje (Pune)', 'localityId': 'ZWL005520'}, {'localityname': 'Mundwa, Pune', 'localityId': 'ZWL003300'}, {'localityname': 'Chakan', 'localityId': 'ZWL001963'}, {'localityname': 'Shivaji Nagar (Pune)', 'localityId': 'ZWL002422'}, {'localityname': 'Yewalewadi, Pune', 'localityId': 'ZWL005088'}, {'localityname': 'Bopkhel, Pune', 'localityId': 'ZWL003014'}, {'localityname': 'Kharadi', 'localityId': 'ZWL001472'}, {'localityname': 'Talegaon Dabhade', 'localityId': 'ZWL004339'}, {'localityname': 'Hinjewadi - Phase 1', 'localityId': 'ZWL003817'}, {'localityname': 'Wanowrie-Kondhwa', 'localityId': 'ZWL007925'}, {'localityname': 'Nagole', 'localityId': 'ZWL003370'}, {'localityname': 'Attapur', 'localityId': 'ZWL002088'}, 
    {'localityname': 'Peerzadiguda', 'localityId': 'ZWL006702'}, {'localityname': 'Begumpet', 'localityId': 'ZWL008776'}, {'localityname': 'Suraram, Hyderabad', 'localityId': 'ZWL003918'}, {'localityname': 'Banjara Hills', 'localityId': 'ZWL004079'}, {'localityname': 'Alwal', 'localityId': 'ZWL008309'}, {'localityname': 'Sainikpuri', 'localityId': 'ZWL002433'}, {'localityname': 'Saroor Nagar', 'localityId': 'ZWL007390'}, {'localityname': 'Karkhana', 'localityId': 'ZWL004767'}, {'localityname': 'Kompally', 'localityId': 'ZWL006016'}, {'localityname': 'Himayatnagar', 'localityId': 'ZWL003283'}, 
    {'localityname': 'Medchal Road', 'localityId': 'ZWL007311'}, {'localityname': 'Kukatpally', 'localityId': 'ZWL005919'}, {'localityname': 'Amberpet', 'localityId': 'ZWL001822'}, {'localityname': 'Jeedimetla', 'localityId': 'ZWL008208'}, {'localityname': 'Gachibowli', 'localityId': 'ZWL001362'}, {'localityname': 'LB Nagar', 'localityId': 'ZWL002162'}, {'localityname': 'Dilsukhnagar', 'localityId': 'ZWL009712'}, {'localityname': 'Masab Tank', 'localityId': 'ZWL005963'}, {'localityname': 'Bachupally', 'localityId': 'ZWL008297'}, {'localityname': 'Manikonda', 'localityId': 'ZWL005424'}, {'localityname': 'Shamshabad', 'localityId': 'ZWL008585'}, {'localityname': 'Miyapur', 'localityId': 'ZWL008599'}, {'localityname': 'Hayath Nagar, Hyderabad', 'localityId': 'ZWL006535'}, {'localityname': 'Sangareddy, Hyderabad', 'localityId': 'ZWL006545'}, {'localityname': 'JNTU', 'localityId': 'ZWL009719'}, {'localityname': 'Serilingampally', 'localityId': 'ZWL008890'}, {'localityname': 'Nizampet', 'localityId': 'ZWL007119'}, {'localityname': 'Q City, Hyderabad', 'localityId': 'ZWL004747'}, {'localityname': 'Madhapur', 'localityId': 'ZWL004802'}, {'localityname': 'Narayanguda', 'localityId': 'ZWL004665'}, {'localityname': 'ECIL', 'localityId': 'ZWL005999'}, {'localityname': 'Toli Chowki', 'localityId': 'ZWL003360'}, {'localityname': 'Kondapur', 'localityId': 'ZWL007187'}, {'localityname': 'Charminar', 'localityId': 'ZWL007344'}, 
    {'localityname': 'Sivarampalli', 'localityId': 'ZWL008438'}, {'localityname': 'Tarnaka', 'localityId': 'ZWL005494'}, {'localityname': 'Moosapet', 'localityId': 'ZWL009519'}, {'localityname': 'Patancheru, Hyderabad', 'localityId': 'ZWL001687'}, {'localityname': 'Vanasthali Puram', 'localityId': 'ZWL005569'}, {'localityname': 'Ameerpet', 'localityId': 'ZWL003027'}, {'localityname': 'Uppal', 'localityId': 'ZWL001337'}, {'localityname': 'Malakpet', 'localityId': 'ZWL001579'}, {'localityname': 'Hafiz Baba Nagar', 'localityId': 'ZWL006699'}, {'localityname': 'Mokila, Hyderabad', 'localityId': 'ZWL008512'}, {'localityname': 'Potheri', 'localityId': 'ZWL006789'}, {'localityname': 'Pallavaram', 'localityId': 'ZWL004297'}, {'localityname': 'Nungambakkam', 'localityId': 'ZWL005190'}, {'localityname': 'Anna Nagar, Chennai', 'localityId': 'ZWL003967'}, {'localityname': 'Perambur', 'localityId': 'ZWL008996'}, {'localityname': 'Mogappair, Chennai', 'localityId': 'ZWL005857'}, {'localityname': 'Royapuram', 'localityId': 'ZWL006232'}, {'localityname': 'Mugalivakkam', 'localityId': 'ZWL008548'}, {'localityname': 'Porur', 'localityId': 'ZWL006053'}, {'localityname': 'Redhills', 'localityId': 'ZWL001398'}, {'localityname': 'Tambaram', 'localityId': 'ZWL001701'}, {'localityname': 'Avadi', 'localityId': 'ZWL008876'}, {'localityname': 'Kilpauk', 'localityId': 'ZWL003387'}, {'localityname': 'Ashok Nagar (CHENNAI)', 'localityId': 'ZWL007059'}, {'localityname': 'Adyar', 'localityId': 'ZWL006520'}, {'localityname': 'Alwarpet', 'localityId': 'ZWL001210'}, {'localityname': 'Selaiyur', 'localityId': 'ZWL007171'}, {'localityname': 'Thandalam, Chennai', 'localityId': 'ZWL006329'}, {'localityname': 'Sholinganallur', 'localityId': 'ZWL004233'}, {'localityname': 'Ambattur', 'localityId': 'ZWL007209'}, {'localityname': 'Medavakkam', 'localityId': 'ZWL003452'}, {'localityname': 'Poonamallee', 'localityId': 'ZWL007176'}, {'localityname': 'Minjur, Chennai', 'localityId': 'ZWL009897'}, {'localityname': 'Urapakkam', 'localityId': 'ZWL004882'}, {'localityname': 'Velachery', 'localityId': 'ZWL006156'}, {'localityname': 'Navallur', 'localityId': 'ZWL001141'}, {'localityname': 'Vadapalani', 'localityId': 'ZWL004431'}, 
    {'localityname': 'T Nagar', 'localityId': 'ZWL001516'}, {'localityname': 'Hazratganj', 'localityId': 'ZWL003425'}, {'localityname': 'Aminabad', 'localityId': 'ZWL006490'}, {'localityname': 'Chowk', 'localityId': 'ZWL009091'}, {'localityname': 'Telibagh, Lucknow', 'localityId': 'ZWL003030'}, {'localityname': 'Husainganj', 'localityId': 'ZWL004978'}, {'localityname': 'Jankipuram', 'localityId': 'ZWL009177'}, {'localityname': 'Arjunganj', 'localityId': 'ZWL004436'}, {'localityname': 'Chinhat, Lucknow', 'localityId': 'ZWL005470'}, {'localityname': 'Mahanagar', 'localityId': 'ZWL001500'}, {'localityname': 'Ashiyana', 'localityId': 'ZWL003371'}, {'localityname': 'Indira Nagar, Lucknow', 'localityId': 'ZWL003635'}, {'localityname': 'Vasant Kunj, Lucknow', 'localityId': 'ZWL003320'}, {'localityname': 'Rajajipuram', 'localityId': 'ZWL009682'}, {'localityname': 'Gomti Nagar', 'localityId': 'ZWL002273'}, {'localityname': 'Alambagh', 'localityId': 'ZWL002331'}, {'localityname': 'Aliganj, Lucknow', 'localityId': 'ZWL007731'}, {'localityname': 'Kalyanpur', 'localityId': 'ZWL007011'}, {'localityname': 'Eroor', 'localityId': 'ZWL003768'}, {'localityname': 'Kakkanad', 'localityId': 'ZWL005555'}, {'localityname': 'Nedumbassery,Kochi', 'localityId': 'ZWL002986'}, {'localityname': 'North Paravur, Kochi', 'localityId': 'ZWL004273'}, {'localityname': 'Aluva, Kochi', 'localityId': 'ZWL005425'}, {'localityname': 'Ambalamugal', 'localityId': 'ZWL004691'}, {'localityname': 'Kalamassery', 'localityId': 'ZWL001981'}, {'localityname': 'Kaloor', 'localityId': 'ZWL003786'}, {'localityname': 'Perumbavoor,Kochi', 'localityId': 'ZWL009487'}, {'localityname': 'Thiruvankulam', 'localityId': 'ZWL007216'}, {'localityname': 'Vypin, Kochi', 'localityId': 'ZWL002327'}, {'localityname': 'Ernakulam', 'localityId': 'ZWL006873'}, {'localityname': 'Fort Kochi', 'localityId': 'ZWL004591'}, {'localityname': 'Mansarovar-2', 'localityId': 'ZWL005082'}, {'localityname': 'Tonk road 2', 'localityId': 'ZWL003863'}, {'localityname': 'Jagatpura', 'localityId': 'ZWL009286'}, 
    {'localityname': 'Shyam Nagar', 'localityId': 'ZWL009458'}, {'localityname': 'C Scheme', 'localityId': 'ZWL003704'}, {'localityname': 'Lal Kothi', 'localityId': 'ZWL003606'}, {'localityname': 'Pink City', 'localityId': 'ZWL009569'}, {'localityname': 'Vaishali Nagar', 'localityId': 'ZWL001750'}, {'localityname': 'Malviya Nagar', 'localityId': 'ZWL002751'}, {'localityname': 'Sodala', 'localityId': 'ZWL005080'}, {'localityname': 'Vidhyadhar Nagar', 'localityId': 'ZWL008680'}, {'localityname': 'Raja Park', 'localityId': 'ZWL008249'}, {'localityname': 'Shastri Nagar', 'localityId': 'ZWL008915'}, {'localityname': 'Pratap Nagar', 'localityId': 'ZWL006372'}, {'localityname': 'Paldi', 'localityId': 'ZWL003133'}, {'localityname': 'Shahibag', 'localityId': 'ZWL002302'}, {'localityname': 'Navrangpura', 'localityId': 'ZWL003747'}, {'localityname': 'Chandkheda', 'localityId': 'ZWL002503'}, {'localityname': 'Science-City Sola', 'localityId': 'ZWL005979'}, {'localityname': 'Sector 16, Gandhinagar', 'localityId': 'ZWL005987'}, {'localityname': 'Vastrapur', 'localityId': 'ZWL001959'}, {'localityname': 'Prahlad Nagar', 'localityId': 'ZWL007404'}, {'localityname': 'Nikol', 'localityId': 'ZWL001898'}, {'localityname': 'Infocity, Gandhinagar', 'localityId': 'ZWL002250'}, {'localityname': 'Naranpura', 'localityId': 'ZWL004415'}, {'localityname': 'Bopal', 'localityId': 'ZWL006288'}, {'localityname': 'Maninagar', 'localityId': 'ZWL009182'}, {'localityname': 'Bodakdev', 'localityId': 'ZWL009990'}, {'localityname': 'Gota', 'localityId': 'ZWL003455'}, {'localityname': 'Sector 15 (Chandigarh)', 'localityId': 'ZWL007561'}, {'localityname': 'Sector 8 (Chandigarh)', 'localityId': 'ZWL006687'}, {'localityname': 'Manimajra (Chandigarh)', 'localityId': 'ZWL001934'}, {'localityname': 'Industrial Area Phase I (Chandigarh)', 'localityId': 'ZWL003936'}, {'localityname': 'Sector 59 (Chandigarh)', 'localityId': 'ZWL004716'}, 
    {'localityname': 'Sector 20, Panchkula', 'localityId': 'ZWL002303'}, {'localityname': 'Sector 8/9 nd  Panchkula', 'localityId': 'ZWL009521'}, {'localityname': 'Sector 28 (Chandigarh)', 'localityId': 'ZWL006817'}, {'localityname': 'Phase 10 Mohali', 'localityId': 'ZWL003496'}, {'localityname': 'Gillco, Chandigarh', 'localityId': 'ZWL009894'}, {'localityname': 'Sector 46 (Chandigarh)', 'localityId': 'ZWL004101'}, {'localityname': 'Sector 70 (Chandigarh)', 'localityId': 'ZWL003262'}, {'localityname': 'VIP Road, Zirakpur', 'localityId': 'ZWL009430'}, {'localityname': 'VR Mall', 'localityId': 'ZWL004196'}, 
    {'localityname': 'Sector 35 (Chandigarh)', 'localityId': 'ZWL003093'}, {'localityname': 'Sector 22 (Chandigarh)', 'localityId': 'ZWL009406'}, {'localityname': 'Verna, Goa', 'localityId': 'ZWL002150'}, {'localityname': 'Mapusa, Goa', 'localityId': 'ZWL008519'}, {'localityname': 'Calangute, Goa', 'localityId': 'ZWL004452'}, {'localityname': 'Majorda, Goa', 'localityId': 'ZWL006556'}, {'localityname': 'Upper panaji, Goa', 'localityId': 'ZWL002137'}, {'localityname': 'Ponda, Goa', 'localityId': 'ZWL005093'}, {'localityname': 'Margao, Goa', 'localityId': 'ZWL002142'}, {'localityname': 'Vasco, Goa', 'localityId': 'ZWL004621'}, {'localityname': 'Morjim, Goa', 'localityId': 'ZWL006403'}, {'localityname': 'Porvorim, Goa', 'localityId': 'ZWL005568'}, {'localityname': 'Sector 32, Ludhiana', 'localityId': 'ZWL009021'}, {'localityname': 'Civil Lines, Ludhiana', 'localityId': 'ZWL006208'}, {'localityname': 'Sarabha Nagar, Ludhiana', 'localityId': 'ZWL006788'}, {'localityname': 'BRS Nagar, Ludhiana', 'localityId': 'ZWL005256'}, {'localityname': 'Model Town, Ludhiana', 'localityId': 'ZWL001163'}, {'localityname': 'Ganesh Nagar, Ludhiana', 'localityId': 'ZWL003304'}, {'localityname': 'Dugri,Ludhiana', 'localityId': 'ZWL003119'}, {'localityname': 'Pathar Quarry, Guwahati', 'localityId': 'ZWL006981'}, {'localityname': 'Basistha-Lokhra, Guwahati', 'localityId': 'ZWL006537'}, {'localityname': 'North Guwahati, Guwahati', 'localityId': 'ZWL009407'}, {'localityname': 'Dharapur, Guwahati', 'localityId': 'ZWL004763'}, {'localityname': 'Lal Ganesh - Kahilipara, Guwahati', 'localityId': 'ZWL007095'}, 
    {'localityname': 'Paltan-Bazar, Guwahati', 'localityId': 'ZWL002105'}, {'localityname': 'Azara, Guwahati', 'localityId': 'ZWL003362'}, {'localityname': 'Changsari, Guwahati', 'localityId': 'ZWL002491'}, {'localityname': 'Maligaon - Jalukbari, Guwahati', 'localityId': 'ZWL005319'}, {'localityname': 'Zoo Tiniali - Christian basti', 'localityId': 'ZWL005708'}, {'localityname': 'Himatpura, Amritsar', 'localityId': 'ZWL001780'}, {'localityname': 'Rasulpur, Amritsar', 'localityId': 'ZWL008281'}, {'localityname': 'Ranjit Avenue, Amritsar', 'localityId': 'ZWL004590'}, {'localityname': 'White Avenue, Amritsar', 'localityId': 'ZWL002073'}, {'localityname': 'Chheharta, Amritsar', 'localityId': 'ZWL005826'}, {'localityname': 'Hall Bazar, Amritsar', 'localityId': 'ZWL007456'}, {'localityname': 'Ashoka Garden, Bhopal', 'localityId': 'ZWL008755'}, {'localityname': 'Shahpura,Bhopal', 'localityId': 'ZWL009428'}, {'localityname': 'Airport Area, Bhopal', 'localityId': 'ZWL006900'}, {'localityname': 'TT Nagar, Bhopal', 'localityId': 'ZWL002615'}, {'localityname': 'BHEL, Bhopal', 'localityId': 'ZWL003463'}, {'localityname': 'MP Nagar,Bhopal', 'localityId': 'ZWL002872'}, 
    {'localityname': 'Hoshangabad Road, Bhopal', 'localityId': 'ZWL005836'}, {'localityname': "People's Mall, Bhopal", 'localityId': 'ZWL003417'}, {'localityname': 'NAD, Vizag', 'localityId': 'ZWL001466'}, {'localityname': 'Gajuwaka', 'localityId': 'ZWL003024'}, {'localityname': 'Dwaraka Nagar', 'localityId': 'ZWL004755'}, {'localityname': 'Madhurawada', 'localityId': 'ZWL009959'}, {'localityname': 'Madhusudan Nagar, Bhubaneswar', 'localityId': 'ZWL007491'}, {'localityname': 'Kalinga Nagar, Bhubneshwar', 'localityId': 'ZWL003084'}, {'localityname': 'Nayapalli, Bhubneshwar', 'localityId': 'ZWL003270'}, {'localityname': 'Sahid Nagar, Bhubaneshwar', 'localityId': 'ZWL007379'}, {'localityname': 'Lakshmi Sagar, Bhubneshwar', 'localityId': 'ZWL001823'}, {'localityname': 'Khandagiri, Bhubneshwar', 'localityId': 'ZWL004098'}, {'localityname': 'Jagmohan Nagar, Bhubaneswar', 'localityId': 'ZWL008906'}, {'localityname': 'Kharabela Nagar, Bhubaneswar', 'localityId': 'ZWL002821'}, 
    {'localityname': 'Chandrasekharpur, Bhubaneswar', 'localityId': 'ZWL009572'}, {'localityname': 'Patia, Bhubneshwar', 'localityId': 'ZWL005652'}, {'localityname': 'Gandhipuram, Coimbatore', 'localityId': 'ZWL003661'}, {'localityname': 'Vadavalli', 'localityId': 'ZWL005742'}, {'localityname': 'RS Puram, Coimbatore', 'localityId': 'ZWL008653'}, {'localityname': 'Racecourse, Coimbatore', 'localityId': 'ZWL002703'}, {'localityname': 'Saibaba Colony, Coimbatore', 'localityId': 'ZWL009668'}, {'localityname': 'Peelamedu, Coimbatore', 'localityId': 'ZWL007527'}, {'localityname': 'Podanur, Coimbatore', 'localityId': 'ZWL005468'}, {'localityname': 'Kunniamuthur, Coimbatore', 'localityId': 'ZWL004408'}, {'localityname': 'Ondipudur, Coimbatore', 'localityId': 'ZWL008265'}, {'localityname': 'Koundampalayam', 'localityId': 'ZWL007600'}, {'localityname': 'Saravanampatty', 'localityId': 'ZWL002147'}, {'localityname': 'Ganapathypudur, Coimbatore', 'localityId': 'ZWL009595'}, {'localityname': 'Sitra, and Singanallur, Coimbatore', 'localityId': 'ZWL001279'}, {'localityname': 'South Mangalore', 'localityId': 'ZWL006449'}, {'localityname': 'Thokkattu, Mangalore', 'localityId': 'ZWL009478'}, {'localityname': 'Waghodia', 'localityId': 'ZWL002354'}, {'localityname': 'Fatehgunj', 'localityId': 'ZWL004097'}, {'localityname': 'Nizampura', 'localityId': 'ZWL009713'}, {'localityname': 'Diwalipura', 'localityId': 'ZWL008938'}, 
    {'localityname': 'Akota', 'localityId': 'ZWL004439'}, {'localityname': 'Manjalpur, Vadodara', 'localityId': 'ZWL002446'}, {'localityname': 'Shubhanpura', 'localityId': 'ZWL008232'}, {'localityname': 'Alkapuri', 'localityId': 'ZWL002475'}, {'localityname': 'Pratap Nagar', 'localityId': 'ZWL005549'}, {'localityname': 'Sadar', 'localityId': 'ZWL001438'}, {'localityname': 'Kharabi, Nagpur', 'localityId': 'ZWL006432'}, {'localityname': 'Hanuman Nagar', 'localityId': 'ZWL009782'}, {'localityname': 'Dharampeth', 'localityId': 'ZWL008282'}, {'localityname': 'Manish Nagar', 'localityId': 'ZWL001041'}, {'localityname': 'Ayodhya Nagar, Nagpur', 'localityId': 'ZWL007188'}, {'localityname': 'Gandhibagh', 'localityId': 'ZWL003633'}, {'localityname': 'Central Mysore', 'localityId': 'ZWL002458'}, {'localityname': 'Udhna, Surat', 'localityId': 'ZWL005095'}, {'localityname': 'City Light, Surat', 'localityId': 'ZWL002155'}, {'localityname': 'Athwa', 'localityId': 'ZWL007951'}, {'localityname': 'Vesu, Surat', 'localityId': 'ZWL006000'}, {'localityname': 'Adajan, Surat', 'localityId': 'ZWL008198'}, {'localityname': 'Varaccha, Surat', 'localityId': 'ZWL002771'}, 
    {'localityname': 'New Textile Market, Surat', 'localityId': 'ZWL005626'}, {'localityname': 'Katargam, Surat', 'localityId': 'ZWL005423'}, {'localityname': 'Kazhakoottam, Thiruvananthapuram', 'localityId': 'ZWL009343'}, {'localityname': 'Tvm Central', 'localityId': 'ZWL007746'}, {'localityname': 'Nemom, Thiruvananthapuram', 'localityId': 'ZWL002223'}, {'localityname': 'Governorpet, Vijayawada', 'localityId': 'ZWL005308'}, {'localityname': 'Gunadala, Vijayawada', 'localityId': 'ZWL004428'}, {'localityname': 'Gollapudi, Vijayawada', 'localityId': 'ZWL002106'}, {'localityname': 'Auto Nagar, Vijayawada', 'localityId': 'ZWL005858'}, {'localityname': 'Labbipet, Vijayawada', 'localityId': 'ZWL003905'}, {'localityname': 'Shastri Nagar, Jalandhar', 'localityId': 'ZWL009921'}, {'localityname': 'Gurdev Nagar, Jalandhar', 'localityId': 'ZWL002344'}, {'localityname': 'Paragpur, Jalandhar', 'localityId': 'ZWL001077'}, {'localityname': 'Model Town, Jalandhar', 'localityId': 'ZWL005408'}, {'localityname': 'Basti Nau, Jalandhar', 'localityId': 'ZWL001624'}, {'localityname': 'Rama Mandi, Jalandhar', 'localityId': 'ZWL004713'}, {'localityname': 'Greater Kailash, Jammu', 'localityId': 'ZWL007457'}, {'localityname': 'Barnai, Jammu', 'localityId': 'ZWL005892'}, {'localityname': 'Gandhi Nagar, Jammu', 'localityId': 'ZWL008753'}, {'localityname': 'OLD JAMMU, Jammu', 'localityId': 'ZWL008047'}, {'localityname': 'Channi Himmat, Jammu', 'localityId': 'ZWL002687'}, {'localityname': 'Shankar Nagar, Raipur', 'localityId': 'ZWL003195'}, {'localityname': 'Purena, Raipur', 'localityId': 'ZWL009896'}, {'localityname': 'Mowa, Raipur', 'localityId': 'ZWL001038'}, {'localityname': 'Mahaveer Nagar', 'localityId': 'ZWL008872'}, {'localityname': 'Samta Colony, Raipur', 'localityId': 'ZWL004310'}, {'localityname': 'Civil Lines, Raipur', 'localityId': 'ZWL006651'}, {'localityname': 'Devendra Nagar', 'localityId': 'ZWL008695'}, {'localityname': 'Moudhapara, Raipur', 'localityId': 'ZWL008436'}];


    export default sampleData;