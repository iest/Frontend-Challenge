/**
 * @jsx React.DOM
 */
var React = require('react');

// Yep, this file is ugly. In the real world, it would be auto-generated as part of a gulp
// task or whatever
var icons = {
  pin: <svg viewBox="0 0 100 100"><path d="M22.8584681,37.9025 C22.8584681,38.2214452 22.8669142,38.5527317 22.8830468,38.9261541 C22.9841807,41.7936706 23.5188843,44.6090208 24.4612483,47.2792464 C25.4328215,50.5184594 26.9062699,54.1556264 28.7909079,58.041134 C30.7440025,62.0677767 33.1068629,66.2966314 35.791528,70.651733 C38.5729127,75.1637344 41.5492511,79.5724789 44.5256964,83.7016957 C45.5678189,85.1474304 46.5361405,86.455785 47.406227,87.6044552 C47.7117636,88.0078183 47.9835312,88.3628262 48.2184726,88.6666834 C48.3610395,88.8510696 48.460643,88.9786823 48.5142246,89.0467224 L50.478339,91.5408336 L52.4424234,89.0466987 C52.4960034,88.9786589 52.595604,88.8510468 52.7381664,88.6666616 C52.9731005,88.3628062 53.2448595,88.0078002 53.5503864,87.6044393 C54.4204453,86.4557753 55.3887361,85.1474268 56.4308254,83.7016975 C59.4071755,79.5724963 62.3834187,75.1637582 65.1647143,70.6517498 C67.8494576,66.2963752 70.2123652,62.0672539 72.1654639,58.0403622 C74.0493988,54.1560719 75.5224124,50.5199537 76.5303915,47.1697905 C77.4368665,44.6142335 77.9716885,41.795937 78.0728976,38.9057416 C78.0886419,38.5821285 78.0974196,38.23805 78.0974196,37.9025 C78.0982339,22.4993289 65.7383498,10 50.4783147,10 C35.2184275,10 22.8584681,22.4991502 22.8584681,37.9025 Z M73.0974196,37.9023678 C73.0974196,38.1554143 73.0906728,38.4198845 73.0773043,38.6983827 C72.9925725,41.1120407 72.553201,43.4273517 71.779366,45.6162071 C70.8181099,48.8012677 69.4423074,52.1974214 67.6666856,55.858392 C65.7931167,59.7213096 63.5103757,63.8069489 60.9083924,68.0280646 C58.1954586,72.4291718 55.2850274,76.7404219 52.3747031,80.7780231 C51.3564564,82.1906746 50.4115779,83.4673887 49.5646902,84.5854618 C49.2692858,84.9754588 49.0075649,85.3173516 48.7826025,85.60831 C48.6492271,85.7808131 48.5587371,85.8967524 48.5142059,85.9533013 L52.4424048,85.9532776 C52.3978719,85.8967281 52.3073788,85.7807876 52.1739988,85.608283 C51.9490289,85.3173223 51.6872993,84.9754269 51.3918851,84.5854272 C50.5449693,83.4673466 49.6000598,82.1906253 48.5817796,80.7779671 C45.6713598,76.7403472 42.7608332,72.4290876 40.0478106,68.027984 C37.4459006,63.807129 35.1632029,59.7217429 33.289635,55.8590582 C31.5133553,52.1969502 30.1371544,48.7998359 29.2127593,45.7270509 C28.4025796,43.4230618 27.9631385,41.1092929 27.8791612,38.7300649 C27.8651419,38.4037523 27.8584681,38.1419834 27.8584681,37.9025 C27.8584681,25.2481178 37.9924626,15 50.4783147,15 C62.964248,15 73.0980886,25.2481711 73.0974196,37.9023678 Z M40.6753671,37.9025 C40.6753671,32.4068796 45.0713362,27.9615 50.4783147,27.9615 C55.885755,27.9615 60.2812622,32.4065975 60.2812622,37.9025 C60.2812622,43.3990595 55.8858461,47.84425 50.4783147,47.84425 C45.0712451,47.84425 40.6753671,43.3987775 40.6753671,37.9025 Z M65.2812622,37.9025 C65.2812622,29.6576525 58.6598132,22.9615 50.4783147,22.9615 C42.2973252,22.9615 35.6753671,29.6578885 35.6753671,37.9025 C35.6753671,46.1477225 42.2971869,52.84425 50.4783147,52.84425 C58.6599515,52.84425 65.2812622,46.1479585 65.2812622,37.9025 Z"></path></svg>,
  chevron: <svg viewBox="0 0 100 100"><path d="M25.0847117,44.5090845 L19.2710755,50.3227207 L25.0847117,56.1363569 L64.9963012,96.0479465 L76.6235737,84.420674 L36.7119841,44.5090845 L36.7119841,56.1363569 L76.6435862,16.2047549 L65.0163138,4.57748245 L25.0847117,44.5090845 Z"></path></svg>,

  // Spray Bottle designed by Olivier Guin from the thenounproject.com
  spray_bottle: <svg viewBox="0 0 100 100"><g transform="translate(25.000000, 7.000000)">
      <path d="M38.8113524,27.876044 C29.9828667,26.5266223 27.2285884,21.4170649 26.4148449,19.0605446 L35.6438873,13.6447931 C36.2375051,13.2970505 36.6019756,12.659372 36.6019756,11.9702095 L36.6019756,6.97626514 C36.6019756,6.00077954 35.8784476,5.17613292 34.9140442,5.05148754 L12.7237454,2.16838567 C12.1265189,2.08528875 11.5193688,2.29664396 11.0935518,2.72928988 L3.32690213,10.6063361 C2.62141717,11.3216922 2.57811374,12.457049 3.22766512,13.2238891 L7.56883347,18.3605433 L9.24413472,26.5311384 C9.461554,27.5824951 10.488206,28.2517866 11.5347055,28.0431411 C12.5839114,27.8272698 13.2587231,26.8003002 13.0449124,25.7498467 L11.269472,17.0942185 C11.2045169,16.7753792 11.0601721,16.4782174 10.8499701,16.2307331 L7.33517541,12.0722741 L13.1802356,6.1443927 L32.7254169,8.68426816 L32.7254169,10.860143 L23.1986634,16.4502174 C22.525656,16.845831 22.1539683,17.6063485 22.2577161,18.383124 C22.3181604,18.8365442 23.907757,29.528047 38.2285605,31.7156637 C38.3277975,31.7310186 38.4270345,31.7382444 38.5235651,31.7382444 C39.4654146,31.7382444 40.2908861,31.0508884 40.4379373,30.0898544 C40.5967166,29.027659 39.870482,28.0377217 38.8113524,27.876044 L38.8113524,27.876044 Z"></path>
      <path d="M25.2366309,42.1063918 C24.9795168,40.4733566 25.074243,39.6920649 25.1419046,39.3949031 C25.2095662,39.3461288 25.272717,39.2901287 25.3322593,39.231419 L26.193817,38.3832884 C27.1925022,37.3996738 27.243925,36.129736 27.243925,35.8840582 L27.243925,34.0107646 C27.243925,32.0399224 25.6732737,30.9768237 24.1955444,30.9768237 L7.57153993,30.9768237 C6.50068232,30.9768237 5.63280951,31.8466317 5.63280951,32.9178594 C5.63280951,33.9890871 6.50158447,34.8588951 7.57153993,34.8588951 L23.365562,34.8588951 L23.365562,35.7214773 L22.8630619,36.2155427 C21.8706917,36.7845759 20.7195423,38.3724497 21.4187122,42.7847156 L28.8100656,80.1801365 C28.8362281,80.3454271 28.8813358,81.2920095 28.4600296,81.7851716 C28.1984047,82.0895593 27.6959045,82.2449144 26.9660614,82.2449144 L5.92600978,82.2449144 C5.54981128,82.2367853 4.65126521,82.0742044 4.26965378,81.6180746 C4.02877848,81.3308482 3.95931257,80.8458151 4.0522345,80.2451689 L11.7025062,40.717228 C11.9063932,39.6640649 11.2189513,38.6452244 10.167039,38.441095 C9.123246,38.2360624 8.09839827,38.9252249 7.89451131,39.9774848 L0.232511554,79.5731677 C-0.129252475,81.8691718 0.627655307,83.3287873 1.32592303,84.1462081 C2.96964887,86.0709857 5.6111578,86.1260825 5.90706454,86.1260825 L26.9660614,86.1260825 C29.3531627,86.1260825 30.6991775,85.1352421 31.4073689,84.3051761 C33.0321495,82.4020759 32.6857221,79.8549747 32.6270821,79.4972966 L25.2366309,42.1063918 L25.2366309,42.1063918 Z"></path>
      <ellipse cx="44.4958291" cy="4.44180904" rx="1.96579506" ry="1.96813251"></ellipse>
      <ellipse cx="49.9087572" cy="3.53858164" rx="1.96579506" ry="1.96813251"></ellipse>
      <ellipse cx="56.2238401" cy="1.73212683" rx="1.96579506" ry="1.96813251"></ellipse>
      <ellipse cx="48.10535" cy="9.86207669" rx="1.96669722" ry="1.96903574"></ellipse>
      <ellipse cx="40.8872104" cy="9.86117346" rx="1.96579506" ry="1.96813251"></ellipse>
      <ellipse cx="43.5936744" cy="12.5708557" rx="1.96579506" ry="1.96813251"></ellipse>
      <ellipse cx="49.0066026" cy="15.2805379" rx="1.96579506" ry="1.96813251"></ellipse>
      <ellipse cx="55.3216854" cy="9.86117346" rx="1.96579506" ry="1.96813251"></ellipse></g></svg>,

  // Iron designed by Joe Harrison from the thenounproject.com
  iron: <svg viewBox="0 0 100 100"><g transform="translate(21.000000, 12.000000)">
    <path d="M43.4766129,66.5122289 L14.5187097,66.5122289 C13.3577742,66.5122289 12.413871,65.5770964 12.413871,64.4248795 C12.413871,63.2726627 13.3577742,62.3375301 14.5187097,62.3375301 L43.4766129,62.3375301 C44.6384839,62.3375301 45.5814516,63.2726627 45.5814516,64.4248795 C45.5814516,65.5770964 44.6384839,66.5122289 43.4766129,66.5122289 L43.4766129,66.5122289 Z"></path>
    <path d="M29,24.6836024 C28.4349677,24.6836024 27.9036129,24.4609518 27.5088387,24.0694578 C27.1196774,23.6835301 26.8951613,23.1510241 26.8951613,22.596253 C26.8951613,22.0405542 27.1196774,21.5089759 27.5088387,21.1230482 C28.2693871,20.3391325 29.7016129,20.3391325 30.4855484,21.1230482 C30.8803226,21.5089759 31.1048387,22.0405542 31.1048387,22.596253 C31.1048387,23.1510241 30.8803226,23.6835301 30.4855484,24.0694578 C30.0907742,24.4609518 29.5594194,24.6836024 29,24.6836024 L29,24.6836024 Z"></path>
    <path d="M21.3645806,37.4312771 C20.8051613,37.4312771 20.2410645,37.2086265 19.8519032,36.8171325 C19.4842581,36.4312048 19.2597419,35.8708675 19.2597419,35.3439277 C19.2597419,34.7891566 19.4842581,34.2566506 19.8519032,33.8707229 C20.6900968,33.0608313 22.0661935,33.0877349 22.850129,33.8707229 C23.2449032,34.2566506 23.4694194,34.7891566 23.4694194,35.3439277 C23.4694194,35.8708675 23.2449032,36.4312048 22.850129,36.8171325 C22.4609677,37.2076988 21.924,37.4312771 21.3645806,37.4312771 L21.3645806,37.4312771 Z"></path>
    <path d="M36.6298065,37.4312771 C36.0694516,37.4312771 35.5390323,37.2086265 35.1442581,36.8171325 C34.7494839,36.4312048 34.5249677,35.8986988 34.5249677,35.3439277 C34.5249677,34.7891566 34.7494839,34.229747 35.1442581,33.8438193 C35.9281935,33.0895904 37.3314194,33.0895904 38.1209677,33.8707229 C38.510129,34.2566506 38.7346452,34.7891566 38.7346452,35.3439277 C38.7346452,35.8708675 38.510129,36.4312048 38.1209677,36.8171325 C37.7261935,37.2076988 37.1948387,37.4312771 36.6298065,37.4312771 L36.6298065,37.4312771 Z"></path>
    <path d="M16.760129,49.9275422 C16.2007097,49.9275422 15.6422258,49.7048916 15.2474516,49.3403012 C14.8526774,48.9274699 14.6552903,48.3931084 14.6552903,47.8401928 C14.6552903,47.313253 14.8526774,46.7788916 15.2474516,46.3929639 C16.0585161,45.5830723 17.4346129,45.6099759 18.2250968,46.366988 C18.6404516,46.7788916 18.8668387,47.313253 18.8668387,47.8401928 C18.8668387,48.3949639 18.6423226,48.9274699 18.2531613,49.3133976 C17.8565161,49.7048916 17.2970968,49.9275422 16.760129,49.9275422 L16.760129,49.9275422 Z"></path>
    <path d="M41.2613871,49.9553735 C40.7010323,49.9553735 40.1640645,49.7327229 39.7749032,49.3412289 C39.380129,48.9553012 39.1565484,48.3949639 39.1565484,47.8411205 C39.1565484,47.3151084 39.380129,46.7538434 39.7749032,46.3679157 C40.5597742,45.6136867 41.963,45.6136867 42.7469355,46.3679157 C43.1417097,46.780747 43.3662258,47.3151084 43.3662258,47.8411205 C43.3662258,48.3968193 43.1417097,48.9293253 42.7469355,49.315253 C42.3306452,49.7317952 41.7936774,49.9553735 41.2613871,49.9553735 L41.2613871,49.9553735 Z"></path>
    <path d="M48.1465484,77.5204458 L9.85906452,77.5204458 C4.54177419,77.5204458 0.217032258,73.2316386 0.217032258,67.9640964 C0.217032258,36.7243614 16.879871,10.1111205 24.9493548,2.11981928 C26.0784839,1.00007229 27.4377419,0.40726506 28.8849355,0.40726506 C30.9018387,0.40726506 32.393,1.53814458 32.8036774,1.88046988 C40.7188065,9.79477108 57.7810968,37.2132651 57.7810968,67.962241 C57.7829677,73.2316386 53.4582258,77.5204458 48.1465484,77.5204458 L48.1465484,77.5204458 Z M28.8849355,4.58196386 C28.6875484,4.58196386 28.3694839,4.63113253 27.9260645,5.06993976 C20.2588387,12.6651084 4.42764516,38.0324337 4.42764516,67.962241 C4.42764516,70.929988 6.86645161,73.3448193 9.86093548,73.3448193 L48.1484194,73.3448193 C51.1410323,73.3448193 53.5760968,70.929988 53.5760968,67.962241 C53.5760968,38.5 37.350129,12.3496867 29.9504516,4.9446988 C29.926129,4.93542169 29.3947742,4.58196386 28.8849355,4.58196386 L28.8849355,4.58196386 Z"></path></g></svg>
};

module.exports = icons;