
var disciplines = [
    {
    'uni': 'Ballarat',
	'sku': 'auto',
	'name': 'Automotive',
	'color': '#005696',
    },
    {
    'uni': 'Ballarat',
	'sku': 'build',
	'name': 'Building & Construction',
	'color': '#007DC6',
    },
    {
    'uni': 'Ballarat',
	'sku': 'cook',
	'name': 'Cookery & Service Skills',
	'color': '#005696',
    },
    {
    'uni': 'Ballarat',
	'sku': 'hair',
	'name': 'Hair & Beauty',
	'color': '#00A1B2',
    },
    {
    'uni': 'Ballarat',
	'sku': 'rural',
	'name': 'Rural & Horticulture',
	'color': '#7DC353',
    },
    {
    'uni': 'Ballarat',
	'sku': 'eng',
	'name': 'Engineering',
	'color': '#62217F',
    },
    {
    'uni': 'Ballarat',
	'sku': 'envsci',
	'name': 'Environmental, Physical & Mathematical Sciences',
	'color': '#FDB813',
    },
    {
    'uni': 'Ballarat',
	'sku': 'it',
	'name': 'Information Technology',
	'color': '#E20969',
    },
    {
    'uni': 'Horsham',
	'sku': 'business',
	'name': 'Business & Sustainability',
	'color': '#FFD204',
    },
    {
    'uni': 'Horsham',
	'sku': 'ohs',
	'name': 'Occupational Health & Safety',
	'color': '#007DC6',
    },
    {
    'uni': 'Horsham',
	'sku': 'nurse',
	'name': 'Nursing, Midwifery & Healthcare',
	'color': '#005696',
    },
    {
    'uni': 'Horsham',
	'sku': 'gensci',
	'name': 'General, Medical & Food Sciences',
	'color': '#007DC6',
    },
    {
    'uni': 'Horsham',
	'sku': 'humanmov',
	'name': 'Human Movement & Sports Sciences',
	'color': '#005696',
    },
    {
    'uni': 'Churchill',
	'sku': 'education',
	'name': 'Education & Children\'s Services',
	'color': '#00A1B2',
    },
    {
    'uni': 'Churchill',
	'sku': 'arts',
	'name': 'Creative, Visual & Performing Arts',
	'color': '#7DC353',
    },
    {
    'uni': 'Churchill',
	'sku': 'humanities',
	'name': 'Humanities & Social Science',
	'color': '#62217F',
    },
    {
    'uni': 'Churchill',
	'sku': 'psych',
	'name': 'Psychology & Criminal Justice',
	'color': '#62217F',
    },
    {
    'uni': 'Churchill',
	'sku': 'research',
	'name': 'Research',
	'color': '#62217F',
    },
];

var programs = [
    {
    'uni': 'Horsham',
	'name': 'Certificate IV in Fitness / Certificate IV in Massage Therapy Practice',
    'sku': 'certivfitness'
    },
    {
    'uni': 'Horsham',
	'name': 'Certificate IV in Massage Therapy Practice',
    'sku': 'certivmassage'
    },
    {
    'uni': 'Horsham',
	'name': 'Diploma of Remedial Massage',
    'sku': 'dipremmassage'
    },
    {
    'uni': 'Horsham',
	'name': 'Bachelor of Exercise & Sport Science',
    'sku': 'bachexcercisesport'
    },
    {
    'uni': 'Ballarat',
	'name': 'Bachelor of Exercise & Sport Science (Honours)',
    'sku': 'sportsciencehonours'
    },
    {
    'uni': 'Ballarat',
	'name': 'Graduate Diploma of Clinical Exercise Physiology',
    'sku': 'diplomaexcercisephys'
    },
    {
    'uni': 'Ballarat',
	'name': 'Master of Clinical Exercise Physiology',
    'sku': 'masterclinEx'
    },
    {
    'uni': 'Ballarat',
	'name': 'Bachelor of Health & Physical Education',
    'sku': 'BachHealthPhys'
    },
    {
    'uni': 'Churchill',
	'name': 'Bachelor of Education (Physical Education) Honors',
    'sku': 'PhysEdHonors'
    },
    {
    'uni': 'Churchill',
	'sku': 'sportmanage',
	'name': 'Bachelor of Sport Management',
    },
    {
    'uni': 'Churchill',
	'name': 'Bachelor of Sport Management / Bachelor of Business',
    'sku': 'BachBusinessSpot'
    },
    {
    'uni': 'Ballarat',
	'name': 'Bachelor of Sport Management (Honours)',
    'sku': 'SportManHonours'
    },
    {
    'uni': 'Churchill',
	'name': 'Graduate Diploma of Outdoor & Environmental Education / Graduate Certificate in Outdoor & Environmental Education',
    'sku': 'GradDripOutdoor'
    },
];

var courses = [
    {
    'uni': 'Ballarat',
	'name': 'Foundations of Health, Outdoor and PE',
    'sku': 'PHSED1000'
    },
	{
    'uni': 'Ballarat',
	'name': 'Community and Bush Environments',
    'sku': 'OEEDU1000'
    },
	{
    'uni': 'Ballarat',
	'name': 'Environmental Studies',
    'sku': 'SCENV1502'
    },
	{
    'uni': 'Ballarat',
	'name': 'Aquatics and Water Safety',
    'sku': 'HMALS1008'
    },
	{
    'uni': 'Ballarat',
	'name': 'Water Environments',
    'sku': 'OEEDU1100'
    },
	{
    'uni': 'Ballarat',
	'name': 'Sustainable Earth',
    'sku': 'SCSUS1500'
    },
	{
    'uni': 'Ballarat',
	'name': 'Outdoor Leadership & Experiential Learning',
    'sku': 'OEEDU2000'
    },
	{
    'uni': 'Ballarat',
	'name': 'Rock Environments',
    'sku': 'OEEDU2200'
    },
	{
    'uni': 'Ballarat',
	'name': 'Population and Global Health Perspectives',
    'sku': 'HEALT2006'
    },
	{
    'uni': 'Ballarat',
	'name': 'Extended Journeys in Outdoor & Environmental Ed',
    'sku': 'OEEDU3200'
    },
	{
    'uni': 'Ballarat',
	'name': 'Pedagogy and Place',
    'sku': 'OEEDU3000'
    },
	{
    'uni': 'Ballarat',
	'name': 'Practicum in OEE',
    'sku': 'OEEDU4000'
    },
	{
    'uni': 'Ballarat',
	'name': 'Coastal Environments',
    'sku': 'OEEDU4100'
    },
	{
    'uni': 'Ballarat',
	'name': 'Health and Physical Activity in Society',
    'sku': 'HEALT3004'
    },
	{
    'uni': 'Ballarat',
	'name': 'Education Outdoors',
    'sku': 'HMALS2105'
    },
	{
    'uni': 'Ballarat',
	'name': 'Teaching in Outdoor and Environmental Ed',
    'sku': 'OEEDU3100'
    }
];