/*
 * @Descripttion: 
 * @version: 
 * @Author: Anke Wang
 * @Date: 2020-05-13 14:37:28
 * @LastEditors: Anke Wang
 * @LastEditTime: 2020-05-14 22:50:45
 */

export const defaultColor = ["#F75C2F", "#FB966E", "#F17C67", "#F596AA", "#F19483", "#FB9966","#FC9F4D",
    "#C78550", "#E1A679", "#C78550", "#A36336",
    "#B481BB", "#E16B8C", "#E03C8A", "#6D2E5B",
    "#A5DEE4", "#81C7D4", "#33A6B8", "#0089A7", "#3A8FB7",
    "#6699A1","#1E88A8",//"#51A8DD","#7DB9DE","#58B2DC","#2B5F75",
    "#3A8FB7", "#2E5C6E", "#006284", "#2EA9DF",
    "#7B90D2", "#7B90D2", "#005CAF", "#113285",
    "#0F2540", "#211E55", "#0D5661", "#77969A",
    "#376B6D", "#305A56", "#405B55", "#566C73", "#577C8A",
    "#B68E55", "#B1B479", "#A5A051", "#939650", "#6C6A2D", "#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3", "#2f7ed8", "#0d233a", "#8bbc21", "#910000", "#1aadce", "#492970", "#f28f43", "#77a1e5", "#c42525", "#a6c96a", "#4572A7", "#AA4643", "#89A54E", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92", "#7cb5ec", "#434348", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#2b908f", "#f45b5b", "#91e8e1", "#007bff", "#6610f2", "#6f42c1", "#e83e8c", "#dc3545", "#fd7e14", "#ffc107", "#28a745", "#20c997", "#17a2b8", "#868e96", "#343a40", "#007bff", "#d8b365", "#5ab4ac", "#a1d76a", "#e9a3c9"];

export const getLatlng = setCountryCoord();

function setCountryCoord(){

    let countryCoord = [
        { "name": "China", "lat": 35.029996, "lng": 108.105469, },
        { "name": "Japan", "lat": 35.69067, "lng": 137.867188, },
        { "name": "Vietnam", "lat": 14.030015, "lng": 108.588867, },
        { "name": "Malaysia", "lat": 4.210484, "lng": 101.975769, },
        { "name": "Thailand", "lat": 15.870032, "lng": 100.992538, },
        { "name": "Singapore", "lat": 1.352083, "lng": 103.819839, },
        { "name": "SouthKorea", "lat": 37.663998, "lng": 127.978462, },
        { "name": "South Korea", "lat": 37.663998, "lng": 127.978462, },
        { "name": "Nepal", "lat": 28.394857, "lng": 84.124008, },
        { "name": "Russia", "lat": 61.52401, "lng": 105.318756, },
        { "name": "Cambodia", "lat": 12.565679, "lng": 104.990963, },
        { "name": "Pakistan", "lat": 30.375321, "lng": 69.345116, },
        { "name": "UnitedStates", "lat": 37.09024, "lng": 263.671875, },
        { "name": "United States", "lat": 37.09024, "lng": 263.671875, },
        { "name": "Canada", "lat": 58.631217, "lng": 249.257813, },
        { "name": "Brazil", "lat": -14.235004, "lng": 309.92528, },
        { "name": "Mexico", "lat": 23.634501, "lng": 258.552784, },
        { "name": "Iceland", "lat": 64.963051, "lng": -19.020835, },
        { "name": "Switzerland", "lat": 46.818188, "lng": 8.227512, },
        { "name": "Netherlands", "lat": 52.132633, "lng": 5.291266, },
        { "name": "Finland", "lat": 61.92411, "lng": 25.748151, },
        { "name": "Norway", "lat": 60.472024, "lng": 8.468946, },
        { "name": "Ireland", "lat": 53.41291, "lng": -8.24389, },
        { "name": "UnitedKingdom", "lat": 53.225768, "lng": -1.230469, },
        { "name": "United Kingdom", "lat": 53.225768, "lng": -1.230469, },
        { "name": "France", "lat": 46.227638, "lng": 2.213749, },
        { "name": "Germany", "lat": 51.165691, "lng": 10.451526, },
        { "name": "Spain", "lat": 40.463667, "lng": -3.74922, },
        { "name": "Italy", "lat": 41.87194, "lng": 12.56738, },
        { "name": "Portugal", "lat": 39.399872, "lng": -8.224454, },
        { "name": "Belgium", "lat": 50.503887, "lng": 4.469936, },
        { "name": "Georgia", "lat": 42.315407, "lng": 43.356892, },
        { "name": "Luxembourg", "lat": 49.815273, "lng": 6.129583, },
        { "name": "NewZealand", "lat": -40.900557, "lng": 174.885971, },
        { "name": "New Zealand", "lat": -40.900557, "lng": 174.885971, },
        { "name": "Kuwait", "lat": 29.31166, "lng": 47.481766, },
        { "name": "Slovakia", "lat": 48.669026, "lng": 19.699024, },
        { "name": "Chile", "lat": -35.675147, "lng": 289.542969, },
        { "name": "SaudiArabia", "lat": 23.885942, "lng": 45.079162, },
        { "name": "Saudi Arabia", "lat": 23.885942, "lng": 45.079162, },
        { "name": "Hungary", "lat": 47.162494, "lng": 19.503304, },
        { "name": "CzechRepublic", "lat": 49.817492, "lng": 15.472962, },
        { "name": "Czech Republic", "lat": 49.817492, "lng": 15.472962, },
        { "name": "Poland", "lat": 51.919438, "lng": 19.145136, },
        { "name": "Luxemburg", "lat": 49.815273, "lng": 6.129583, },
        { "name": "Turkey", "lat": 38.963745, "lng": 35.243322, },
        { "name": "Lithuania", "lat": 55.169438, "lng": 23.881275, },
        { "name": "Denmark", "lat": 56.26392, "lng": 9.501785, },
        { "name": "Sweden", "lat": 60.128161, "lng": 18.643501, },
        { "name": "Australia", "lat": -25.274398, "lng": 133.775136, },
        { "name": "Senegal", "lat": 14.497401, "lng": -14.452362, },
        { "name": "Congo", "lat": -0.228021, "lng": 15.827659, },
        { "name": "Algeria", "lat": 28.033886, "lng": 1.659626, },
        { "name": "SouthAfrica", "lat": -30.559482, "lng": 22.937506, },
        { "name": "South Africa", "lat": -30.559482, "lng": 22.937506, },
        { "name": "India", "lat": 20.593684, "lng": 78.96288, },
        { "name": "Austria", "lat": 47.516231, "lng": 14.550072, },
        { "name": "Alaska", "lat": 64.200844, "lng": 205.493668, },
        { "name": "Estonia", "lat": 58.595272, "lng": 25.013607, },
        { "name": "Argentina", "lat": -38.416097, "lng": 297.616672, },
        { "name": "Israel", "lat": 31.046051, "lng": 34.851612, },
        { "name": "Slovenia", "lat": 46.151241, "lng": 14.995463, },
        { "name": "Greece", "lat": 39.074208, "lng": 21.824312, },
        { "name": "Belarus", "lat": 53.709807, "lng": 27.953389, },
        { "name": "Latvia", "lat": 56.879635, "lng": 24.603189, },
        { "name": "Iran", "lat": 32.4279, "lng": 53.6880, },
        { "name": "Qatar", "lat": 25.17, "lng": 51.32, },
        { "name": "SriLanka", "lat": 7.8731, "lng": 80.7718 },
        { "name": "Sri Lanka", "lat": 7.8731, "lng": 80.7718 },
        { "name": "Gambia", "lat": 13.4432, "lng": 15.3101 },
        { "name": "UnitedArabEmirates", "lat": 24.466667, "lng": 54.366669 },
        { "name": "United Arab Emirates", "lat": 24.466667, "lng": 54.366669 },
        { "name": "CostaRica", "lat": 9.934739, "lng": 275.912498 },
        { "name": "Costa Rica", "lat": 9.934739, "lng": 275.912498 },
        { "name": "Kazakhstan", "lat": 43.238949, "lng": 76.889709 },
        { "name": "Indonesia", "lat": -8.409518, "lng": 115.188919 },
        { "name": "Philippines", "lat": 16.566233, "lng": 121.262634 },
        { "name": "Egypt", "lat": 26.8205528, "lng": 30.8024979 },
        { "name": "Brunei", "lat": 4.74029, "lng": 114.6312 },
        { "name": "Serbia", "lat": 44.016521, "lng": 21.005859 },
        { "name": "Bangladesh", "lat": 23.55, "lng": 90.43 },
        { "name": "Uruguay", "lat": -34.901112, "lng": 304.164532 },
        { "name": "Jordan", "lat": 30.5852, "lng": 36.2384 }
    ];

    let getLatlng = {}

    countryCoord.forEach(function (c) {
        getLatlng[c.name] = [c.lat, c.lng];
        //getLatlng[c.name] = {"lat":c.lat,"lng":c.lng}
    });

    return getLatlng;
}

