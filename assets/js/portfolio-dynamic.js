/* portfolio-dynamic.js
 * Renderiza filtros e ítems de un portafolio (Isotope) desde un arreglo JSON.
 * Modo optimizado: carga progresiva por “bloques” (paginación en el scroll).
 * Requisitos: incluir Isotope antes de este script. Opcional: imagesLoaded.
 * HTML mínimo:
 *   <ul id="portfolio-filters" class="portfolio-filters isotope-filters"></ul>
 *   <div id="portfolio-container" class="row gy-4 isotope-container"></div>
 */
(function () {
  'use strict';

  // ====== 1) Tus datos en JSON (edítalos a tu gusto) ======
  const portfolioItems = [
    {
      title: "Begonias",
      description: "Ejecución de obra",
      thumb: "assets/img/Begonias/begonias_1.jpg",
      full:  "assets/img/Begonias/begonias_1.jpg",
      gallery: "portfolio-gallery-begnonias",
      categories: ["Begonias"]
    },
    {
      title: "Cafele",
      description: "Ejecución de obra",
      thumb: "assets/img/Cafele/cafele_1.jpg",
      full:  "assets/img/Cafele/cafele_1.jpg",
      gallery: "portfolio-gallery-cafele",
      categories: ["Cafele"]
    },
    {
      title: "CTRL",
      description: "Ejecución de Obra",
      thumb: "assets/img/CTRL/ctrl_1.jpg",
      full:  "assets/img/CTRL/ctrl_1.jpg",
      gallery: "portfolio-gallery-ctrl",
      categories: ["CTRL"]
    },
    {
      title: "Danzsana",
      description: "Ejecución de Obra",
      thumb: "assets/img/Danzsana/danzsana_1.jpg",
      full:  "assets/img/Danzsana/danzsana_1.jpg",
      gallery: "portfolio-gallery-danzsana",
      categories: ["Danzsana"]
    },
    {
      title: "Fachada San Francisco",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fachada_San_Francisco/fachada_1.jpg",
      full:  "assets/img/Fachada_San_Francisco/fachada_1.jpg",
      gallery: "portfolio-gallery-fachada-san-francisco",
      categories: ["Fachada San Francisco"]
    },
    {
      title: "Fajas Colombianas",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fajas_Colombianas/fajas_1.jpg",
      full:  "assets/img/Fajas_Colombianas/fajas_1.jpg",
      gallery: "portfolio-gallery-fajas",
      categories: ["Fajas colombianas"]
    },
    {
      title: "Kuest",
      description: "Ejecución de obra",
      thumb: "assets/img/Kuest/kuest_1.jpg",
      full:  "assets/img/Kuest/kuest_1.jpg",
      gallery: "portfolio-gallery-kuest",
      categories: ["Kuest"]
    },
    {
      title: "Pilates Angels",
      description: "Ejecución de Obra",
      thumb: "assets/img/Pilates_Angels/pilates_1.jpg",
      full:  "assets/img/Pilates_Angels/pilates_1.jpg",
      gallery: "portfolio-gallery-pilates-angels",
      categories: ["Pilates Angels"]
    },
    {
      title: "Rise",
      description: "Ejecución de Obra",
      thumb: "assets/img/Rise/rise_1.jpg",
      full:  "assets/img/Rise/rise_1.jpg",
      gallery: "portfolio-gallery-rise",
      categories: ["Rise"]
    },
    {
      title: "Roof Garden",
      description: "Ejecución de Obra",
      thumb: "assets/img/Roof_Garden/roof_1.jpg",
      full:  "assets/img/Roof_Garden/roof_1.jpg",
      gallery: "portfolio-gallery-roof",
      categories: ["Roof Garden"]
    },
    {
      title: "Begonias",
      description: "Ejecución de obra",
      thumb: "assets/img/Begonias/begonias_2.jpg",
      full:  "assets/img/Begonias/begonias_2.jpg",
      gallery: "portfolio-gallery-begnonias",
      categories: ["Begonias"]
    },
    {
      title: "Cafele",
      description: "Ejecución de obra",
      thumb: "assets/img/Cafele/cafele_2.jpg",
      full:  "assets/img/Cafele/cafele_2.jpg",
      gallery: "portfolio-gallery-cafele",
      categories: ["Cafele"]
    },
    {
      title: "CTRL",
      description: "Ejecución de Obra",
      thumb: "assets/img/CTRL/ctrl_2.jpg",
      full:  "assets/img/CTRL/ctrl_2.jpg",
      gallery: "portfolio-gallery-ctrl",
      categories: ["CTRL"]
    },
    {
      title: "Danzsana",
      description: "Ejecución de Obra",
      thumb: "assets/img/Danzsana/danzsana_2.jpg",
      full:  "assets/img/Danzsana/danzsana_2.jpg",
      gallery: "portfolio-gallery-danzsana",
      categories: ["Danzsana"]
    },
    {
      title: "Fachada San Francisco",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fachada_San_Francisco/fachada_2.jpg",
      full:  "assets/img/Fachada_San_Francisco/fachada_2.jpg",
      gallery: "portfolio-gallery-fachada-san-francisco",
      categories: ["Fachada San Francisco"]
    },
    {
      title: "Fajas Colombianas",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fajas_Colombianas/fajas_2.jpg",
      full:  "assets/img/Fajas_Colombianas/fajas_2.jpg",
      gallery: "portfolio-gallery-fajas",
      categories: ["Fajas colombianas"]
    },
    {
      title: "Kuest",
      description: "Ejecución de obra",
      thumb: "assets/img/Kuest/kuest_2.jpg",
      full:  "assets/img/Kuest/kuest_2.jpg",
      gallery: "portfolio-gallery-kuest",
      categories: ["Kuest"]
    },
    {
      title: "Pilates Angels",
      description: "Ejecución de Obra",
      thumb: "assets/img/Pilates_Angels/pilates_2.jpg",
      full:  "assets/img/Pilates_Angels/pilates_2.jpg",
      gallery: "portfolio-gallery-pilates-angels",
      categories: ["Pilates Angels"]
    },
    {
      title: "Rise",
      description: "Ejecución de Obra",
      thumb: "assets/img/Rise/rise_2.jpg",
      full:  "assets/img/Rise/rise_2.jpg",
      gallery: "portfolio-gallery-rise",
      categories: ["Rise"]
    },
    {
      title: "Roof Garden",
      description: "Ejecución de Obra",
      thumb: "assets/img/Roof_Garden/roof_2.jpg",
      full:  "assets/img/Roof_Garden/roof_2.jpg",
      gallery: "portfolio-gallery-roof",
      categories: ["Roof Garden"]
    },
    {
      title: "Begonias",
      description: "Ejecución de obra",
      thumb: "assets/img/Begonias/begonias_3.jpg",
      full:  "assets/img/Begonias/begonias_3.jpg",
      gallery: "portfolio-gallery-begnonias",
      categories: ["Begonias"]
    },
    {
      title: "Cafele",
      description: "Ejecución de obra",
      thumb: "assets/img/Cafele/cafele_3.jpg",
      full:  "assets/img/Cafele/cafele_3.jpg",
      gallery: "portfolio-gallery-cafele",
      categories: ["Cafele"]
    },
    {
      title: "CTRL",
      description: "Ejecución de Obra",
      thumb: "assets/img/CTRL/ctrl_3.jpg",
      full:  "assets/img/CTRL/ctrl_3.jpg",
      gallery: "portfolio-gallery-ctrl",
      categories: ["CTRL"]
    },
    {
      title: "Danzsana",
      description: "Ejecución de Obra",
      thumb: "assets/img/Danzsana/danzsana_3.jpg",
      full:  "assets/img/Danzsana/danzsana_3.jpg",
      gallery: "portfolio-gallery-danzsana",
      categories: ["Danzsana"]
    },
    {
      title: "Fachada San Francisco",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fachada_San_Francisco/fachada_3.jpg",
      full:  "assets/img/Fachada_San_Francisco/fachada_3.jpg",
      gallery: "portfolio-gallery-fachada-san-francisco",
      categories: ["Fachada San Francisco"]
    },
    {
      title: "Fajas Colombianas",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fajas_Colombianas/fajas_3.jpg",
      full:  "assets/img/Fajas_Colombianas/fajas_3.jpg",
      gallery: "portfolio-gallery-fajas",
      categories: ["Fajas colombianas"]
    },
    {
      title: "Kuest",
      description: "Ejecución de obra",
      thumb: "assets/img/Kuest/kuest_3.jpg",
      full:  "assets/img/Kuest/kuest_3.jpg",
      gallery: "portfolio-gallery-kuest",
      categories: ["Kuest"]
    },
    {
      title: "Pilates Angels",
      description: "Ejecución de Obra",
      thumb: "assets/img/Pilates_Angels/pilates_3.jpg",
      full:  "assets/img/Pilates_Angels/pilates_3.jpg",
      gallery: "portfolio-gallery-pilates-angels",
      categories: ["Pilates Angels"]
    },
    {
      title: "Rise",
      description: "Ejecución de Obra",
      thumb: "assets/img/Rise/rise_3.jpg",
      full:  "assets/img/Rise/rise_3.jpg",
      gallery: "portfolio-gallery-rise",
      categories: ["Rise"]
    },
    {
      title: "Roof Garden",
      description: "Ejecución de Obra",
      thumb: "assets/img/Roof_Garden/roof_3.jpg",
      full:  "assets/img/Roof_Garden/roof_3.jpg",
      gallery: "portfolio-gallery-roof",
      categories: ["Roof Garden"]
    },
    {
      title: "Begonias",
      description: "Ejecución de obra",
      thumb: "assets/img/Begonias/begonias_4.jpg",
      full:  "assets/img/Begonias/begonias_4.jpg",
      gallery: "portfolio-gallery-begnonias",
      categories: ["Begonias"]
    },
    {
      title: "Cafele",
      description: "Ejecución de obra",
      thumb: "assets/img/Cafele/cafele_4.jpg",
      full:  "assets/img/Cafele/cafele_4.jpg",
      gallery: "portfolio-gallery-cafele",
      categories: ["Cafele"]
    },
    {
      title: "CTRL",
      description: "Ejecución de Obra",
      thumb: "assets/img/CTRL/ctrl_4.jpg",
      full:  "assets/img/CTRL/ctrl_4.jpg",
      gallery: "portfolio-gallery-ctrl",
      categories: ["CTRL"]
    },
    {
      title: "Danzsana",
      description: "Ejecución de Obra",
      thumb: "assets/img/Danzsana/danzsana_4.jpg",
      full:  "assets/img/Danzsana/danzsana_4.jpg",
      gallery: "portfolio-gallery-danzsana",
      categories: ["Danzsana"]
    },
    {
      title: "Fachada San Francisco",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fachada_San_Francisco/fachada_4.jpg",
      full:  "assets/img/Fachada_San_Francisco/fachada_4.jpg",
      gallery: "portfolio-gallery-fachada-san-francisco",
      categories: ["Fachada San Francisco"]
    },
    {
      title: "Fajas Colombianas",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fajas_Colombianas/fajas_4.jpg",
      full:  "assets/img/Fajas_Colombianas/fajas_4.jpg",
      gallery: "portfolio-gallery-fajas",
      categories: ["Fajas colombianas"]
    },
    {
      title: "Kuest",
      description: "Ejecución de obra",
      thumb: "assets/img/Kuest/kuest_4.jpg",
      full:  "assets/img/Kuest/kuest_4.jpg",
      gallery: "portfolio-gallery-kuest",
      categories: ["Kuest"]
    },
    {
      title: "Pilates Angels",
      description: "Ejecución de Obra",
      thumb: "assets/img/Pilates_Angels/pilates_4.jpg",
      full:  "assets/img/Pilates_Angels/pilates_4.jpg",
      gallery: "portfolio-gallery-pilates-angels",
      categories: ["Pilates Angels"]
    },
    {
      title: "Rise",
      description: "Ejecución de Obra",
      thumb: "assets/img/Rise/rise_4.jpg",
      full:  "assets/img/Rise/rise_4.jpg",
      gallery: "portfolio-gallery-rise",
      categories: ["Rise"]
    },
    {
      title: "Roof Garden",
      description: "Ejecución de Obra",
      thumb: "assets/img/Roof_Garden/roof_4.jpg",
      full:  "assets/img/Roof_Garden/roof_4.jpg",
      gallery: "portfolio-gallery-roof",
      categories: ["Roof Garden"]
    },
    {
      title: "Begonias",
      description: "Ejecución de obra",
      thumb: "assets/img/Begonias/begonias_5.jpg",
      full:  "assets/img/Begonias/begonias_5.jpg",
      gallery: "portfolio-gallery-begnonias",
      categories: ["Begonias"]
    },
    {
      title: "Cafele",
      description: "Ejecución de obra",
      thumb: "assets/img/Cafele/cafele_5.jpg",
      full:  "assets/img/Cafele/cafele_5.jpg",
      gallery: "portfolio-gallery-cafele",
      categories: ["Cafele"]
    },
    {
      title: "CTRL",
      description: "Ejecución de Obra",
      thumb: "assets/img/CTRL/ctrl_5.jpg",
      full:  "assets/img/CTRL/ctrl_5.jpg",
      gallery: "portfolio-gallery-ctrl",
      categories: ["CTRL"]
    },
    {
      title: "Danzsana",
      description: "Ejecución de Obra",
      thumb: "assets/img/Danzsana/danzsana_5.jpg",
      full:  "assets/img/Danzsana/danzsana_5.jpg",
      gallery: "portfolio-gallery-danzsana",
      categories: ["Danzsana"]
    },
    {
      title: "Fachada San Francisco",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fachada_San_Francisco/fachada_5.jpg",
      full:  "assets/img/Fachada_San_Francisco/fachada_5.jpg",
      gallery: "portfolio-gallery-fachada-san-francisco",
      categories: ["Fachada San Francisco"]
    },
    {
      title: "Fajas Colombianas",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fajas_Colombianas/fajas_5.jpg",
      full:  "assets/img/Fajas_Colombianas/fajas_5.jpg",
      gallery: "portfolio-gallery-fajas",
      categories: ["Fajas colombianas"]
    },
    {
      title: "Kuest",
      description: "Ejecución de obra",
      thumb: "assets/img/Kuest/kuest_5.jpg",
      full:  "assets/img/Kuest/kuest_5.jpg",
      gallery: "portfolio-gallery-kuest",
      categories: ["Kuest"]
    },
    {
      title: "Pilates Angels",
      description: "Ejecución de Obra",
      thumb: "assets/img/Pilates_Angels/pilates_5.jpg",
      full:  "assets/img/Pilates_Angels/pilates_5.jpg",
      gallery: "portfolio-gallery-pilates-angels",
      categories: ["Pilates Angels"]
    },
    {
      title: "Rise",
      description: "Ejecución de Obra",
      thumb: "assets/img/Rise/rise_5.jpg",
      full:  "assets/img/Rise/rise_5.jpg",
      gallery: "portfolio-gallery-rise",
      categories: ["Rise"]
    },
    {
      title: "Roof Garden",
      description: "Ejecución de Obra",
      thumb: "assets/img/Roof_Garden/roof_5.jpg",
      full:  "assets/img/Roof_Garden/roof_5.jpg",
      gallery: "portfolio-gallery-roof",
      categories: ["Roof Garden"]
    },
    {
      title: "Begonias",
      description: "Ejecución de obra",
      thumb: "assets/img/Begonias/begonias_6.jpg",
      full:  "assets/img/Begonias/begonias_6.jpg",
      gallery: "portfolio-gallery-begnonias",
      categories: ["Begonias"]
    },
    {
      title: "CTRL",
      description: "Ejecución de Obra",
      thumb: "assets/img/CTRL/ctrl_6.jpg",
      full:  "assets/img/CTRL/ctrl_6.jpg",
      gallery: "portfolio-gallery-ctrl",
      categories: ["CTRL"]
    },
    {
      title: "Danzsana",
      description: "Ejecución de Obra",
      thumb: "assets/img/Danzsana/danzsana_6.jpg",
      full:  "assets/img/Danzsana/danzsana_6.jpg",
      gallery: "portfolio-gallery-danzsana",
      categories: ["Danzsana"]
    },
    {
      title: "Fachada San Francisco",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fachada_San_Francisco/fachada_6.jpg",
      full:  "assets/img/Fachada_San_Francisco/fachada_6.jpg",
      gallery: "portfolio-gallery-fachada-san-francisco",
      categories: ["Fachada San Francisco"]
    },
    {
      title: "Fajas Colombianas",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fajas_Colombianas/fajas_6.jpg",
      full:  "assets/img/Fajas_Colombianas/fajas_6.jpg",
      gallery: "portfolio-gallery-fajas",
      categories: ["Fajas colombianas"]
    },
    {
      title: "Kuest",
      description: "Ejecución de obra",
      thumb: "assets/img/Kuest/kuest_6.jpg",
      full:  "assets/img/Kuest/kuest_6.jpg",
      gallery: "portfolio-gallery-kuest",
      categories: ["Kuest"]
    },
    {
      title: "Begonias",
      description: "Ejecución de obra",
      thumb: "assets/img/Begonias/begonias_7.jpg",
      full:  "assets/img/Begonias/begonias_7.jpg",
      gallery: "portfolio-gallery-begnonias",
      categories: ["Begonias"]
    },
    {
      title: "Cafele",
      description: "Ejecución de obra",
      thumb: "assets/img/Cafele/cafele_7.jpg",
      full:  "assets/img/Cafele/cafele_7.jpg",
      gallery: "portfolio-gallery-cafele",
      categories: ["Cafele"]
    },
    {
      title: "CTRL",
      description: "Ejecución de Obra",
      thumb: "assets/img/CTRL/ctrl_7.jpg",
      full:  "assets/img/CTRL/ctrl_7.jpg",
      gallery: "portfolio-gallery-ctrl",
      categories: ["CTRL"]
    },
    {
      title: "Danzsana",
      description: "Ejecución de Obra",
      thumb: "assets/img/Danzsana/danzsana_7.jpg",
      full:  "assets/img/Danzsana/danzsana_7.jpg",
      gallery: "portfolio-gallery-danzsana",
      categories: ["Danzsana"]
    },
    {
      title: "Fachada San Francisco",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fachada_San_Francisco/fachada_7.jpg",
      full:  "assets/img/Fachada_San_Francisco/fachada_7.jpg",
      gallery: "portfolio-gallery-fachada-san-francisco",
      categories: ["Fachada San Francisco"]
    },
    {
      title: "Fajas Colombianas",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fajas_Colombianas/fajas_7.jpg",
      full:  "assets/img/Fajas_Colombianas/fajas_7.jpg",
      gallery: "portfolio-gallery-fajas",
      categories: ["Fajas colombianas"]
    },
    {
      title: "Begonias",
      description: "Ejecución de obra",
      thumb: "assets/img/Begonias/begonias_8.jpg",
      full:  "assets/img/Begonias/begonias_8.jpg",
      gallery: "portfolio-gallery-begnonias",
      categories: ["Begonias"]
    },
    {
      title: "Cafele",
      description: "Ejecución de obra",
      thumb: "assets/img/Cafele/cafele_8.jpg",
      full:  "assets/img/Cafele/cafele_8.jpg",
      gallery: "portfolio-gallery-cafele",
      categories: ["Cafele"]
    },
    {
      title: "CTRL",
      description: "Ejecución de Obra",
      thumb: "assets/img/CTRL/ctrl_8.jpg",
      full:  "assets/img/CTRL/ctrl_8.jpg",
      gallery: "portfolio-gallery-ctrl",
      categories: ["CTRL"]
    },
    {
      title: "Fachada San Francisco",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fachada_San_Francisco/fachada_8.jpg",
      full:  "assets/img/Fachada_San_Francisco/fachada_8.jpg",
      gallery: "portfolio-gallery-fachada-san-francisco",
      categories: ["Fachada San Francisco"]
    },
    {
      title: "Fajas Colombianas",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fajas_Colombianas/fajas_8.jpg",
      full:  "assets/img/Fajas_Colombianas/fajas_8.jpg",
      gallery: "portfolio-gallery-fajas",
      categories: ["Fajas colombianas"]
    },
    {
      title: "Begonias",
      description: "Ejecución de obra",
      thumb: "assets/img/Begonias/begonias_9.jpg",
      full:  "assets/img/Begonias/begonias_9.jpg",
      gallery: "portfolio-gallery-begnonias",
      categories: ["Begonias"]
    },
    {
      title: "Cafele",
      description: "Ejecución de obra",
      thumb: "assets/img/Cafele/cafele_9.jpg",
      full:  "assets/img/Cafele/cafele_9.jpg",
      gallery: "portfolio-gallery-cafele",
      categories: ["Cafele"]
    },
    {
      title: "CTRL",
      description: "Ejecución de Obra",
      thumb: "assets/img/CTRL/ctrl_9.jpg",
      full:  "assets/img/CTRL/ctrl_9.jpg",
      gallery: "portfolio-gallery-ctrl",
      categories: ["CTRL"]
    },
    {
      title: "Danzsana",
      description: "Ejecución de Obra",
      thumb: "assets/img/Danzsana/danzsana_9.jpg",
      full:  "assets/img/Danzsana/danzsana_9.jpg",
      gallery: "portfolio-gallery-danzsana",
      categories: ["Danzsana"]
    },
    {
      title: "Fachada San Francisco",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fachada_San_Francisco/fachada_9.jpg",
      full:  "assets/img/Fachada_San_Francisco/fachada_9.jpg",
      gallery: "portfolio-gallery-fachada-san-francisco",
      categories: ["Fachada San Francisco"]
    },
    {
      title: "Fajas Colombianas",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fajas_Colombianas/fajas_9.jpg",
      full:  "assets/img/Fajas_Colombianas/fajas_9.jpg",
      gallery: "portfolio-gallery-fajas",
      categories: ["Fajas colombianas"]
    },
    {
      title: "Cafele",
      description: "Ejecución de obra",
      thumb: "assets/img/Cafele/cafele_10.jpg",
      full:  "assets/img/Cafele/cafele_10.jpg",
      gallery: "portfolio-gallery-cafele",
      categories: ["Cafele"]
    },
    {
      title: "Danzsana",
      description: "Ejecución de Obra",
      thumb: "assets/img/Danzsana/danzsana_10.jpg",
      full:  "assets/img/Danzsana/danzsana_10.jpg",
      gallery: "portfolio-gallery-danzsana",
      categories: ["Danzsana"]
    },
    {
      title: "Fajas Colombianas",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fajas_Colombianas/fajas_10.jpg",
      full:  "assets/img/Fajas_Colombianas/fajas_10.jpg",
      gallery: "portfolio-gallery-fajas",
      categories: ["Fajas colombianas"]
    },
    {
      title: "Begonias",
      description: "Ejecución de obra",
      thumb: "assets/img/Begonias/begonias_11.jpg",
      full:  "assets/img/Begonias/begonias_11.jpg",
      gallery: "portfolio-gallery-begnonias",
      categories: ["Begonias"]
    },
    {
      title: "Cafele",
      description: "Ejecución de obra",
      thumb: "assets/img/Cafele/cafele_11.jpg",
      full:  "assets/img/Cafele/cafele_11.jpg",
      gallery: "portfolio-gallery-cafele",
      categories: ["Cafele"]
    },
    {
      title: "Begonias",
      description: "Ejecución de obra",
      thumb: "assets/img/Begonias/begonias_12.jpg",
      full:  "assets/img/Begonias/begonias_12.jpg",
      gallery: "portfolio-gallery-begnonias",
      categories: ["Begonias"]
    },
    {
      title: "Cafele",
      description: "Ejecución de obra",
      thumb: "assets/img/Cafele/cafele_12.jpg",
      full:  "assets/img/Cafele/cafele_12.jpg",
      gallery: "portfolio-gallery-cafele",
      categories: ["Cafele"]
    },
    {
      title: "CTRL",
      description: "Ejecución de Obra",
      thumb: "assets/img/CTRL/ctrl_12.jpg",
      full:  "assets/img/CTRL/ctrl_12.jpg",
      gallery: "portfolio-gallery-ctrl",
      categories: ["CTRL"]
    },
    {
      title: "Cafele",
      description: "Ejecución de obra",
      thumb: "assets/img/Cafele/cafele_13.jpg",
      full:  "assets/img/Cafele/cafele_13.jpg",
      gallery: "portfolio-gallery-cafele",
      categories: ["Cafele"]
    },
    {
      title: "CTRL",
      description: "Ejecución de Obra",
      thumb: "assets/img/CTRL/ctrl_13.jpg",
      full:  "assets/img/CTRL/ctrl_13.jpg",
      gallery: "portfolio-gallery-ctrl",
      categories: ["CTRL"]
    },
    {
      title: "Cafele",
      description: "Ejecución de obra",
      thumb: "assets/img/Cafele/cafele_14.jpg",
      full:  "assets/img/Cafele/cafele_14.jpg",
      gallery: "portfolio-gallery-cafele",
      categories: ["Cafele"]
    },
    {
      title: "CTRL",
      description: "Ejecución de Obra",
      thumb: "assets/img/CTRL/ctrl_14.jpg",
      full:  "assets/img/CTRL/ctrl_14.jpg",
      gallery: "portfolio-gallery-ctrl",
      categories: ["CTRL"]
    },
    {
      title: "Cafele",
      description: "Ejecución de obra",
      thumb: "assets/img/Cafele/cafele_15.jpg",
      full:  "assets/img/Cafele/cafele_15.jpg",
      gallery: "portfolio-gallery-cafele",
      categories: ["Cafele"]
    },
    {
      title: "Cafele",
      description: "Ejecución de obra",
      thumb: "assets/img/Cafele/cafele_16.jpg",
      full:  "assets/img/Cafele/cafele_16.jpg",
      gallery: "portfolio-gallery-cafele",
      categories: ["Cafele"]
    },
    {
      title: "Cafele",
      description: "Ejecución de obra",
      thumb: "assets/img/Cafele/cafele_17.jpg",
      full:  "assets/img/Cafele/cafele_17.jpg",
      gallery: "portfolio-gallery-cafele",
      categories: ["Cafele"]
    },
    {
      title: "Cafele",
      description: "Ejecución de obra",
      thumb: "assets/img/Cafele/cafele_18.jpg",
      full:  "assets/img/Cafele/cafele_18.jpg",
      gallery: "portfolio-gallery-cafele",
      categories: ["Cafele"]
    },
    {
      title: "Cafele",
      description: "Ejecución de obra",
      thumb: "assets/img/Cafele/cafele_19.jpg",
      full:  "assets/img/Cafele/cafele_19.jpg",
      gallery: "portfolio-gallery-cafele",
      categories: ["Cafele"]
    },
    {
      title: "Cafele",
      description: "Ejecución de obra",
      thumb: "assets/img/Cafele/cafele_20.jpg",
      full:  "assets/img/Cafele/cafele_20.jpg",
      gallery: "portfolio-gallery-cafele",
      categories: ["Cafele"]
    },
  ];

  // ====== 2) Helpers ======
  const slugify = (s) => s.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // quita acentos
    .replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
  const categoryClass = (cat) => `filter-${slugify(cat)}`;

  // ====== 3) Render de filtros ======
  function renderFilters(filtersEl, items) {
    const categories = Array.from(new Set(items.flatMap(i => i.categories || [])));
    const allLi = `<li data-filter="*" class="filter-active">Todos</li>`;
    const catLis = categories.map(cat =>
      `<li data-filter=".${categoryClass(cat)}">${cat}</li>`).join("");
    filtersEl.innerHTML = allLi + catLis;
  }

  // ====== 4) Defaults de carga (primeros 10 eager; resto lazy) ======
  const itemsWithDefaults = portfolioItems.map((it, i) => {
    const eager = i < 10; // primeros 10 eager
    return {
      ...it,
      loading: it.loading || (eager ? "eager" : "lazy"),
      decoding: it.decoding || (eager ? "sync" : "async"),
      fetchpriority: it.fetchpriority || (eager ? "high" : "low"),
    };
  });

  // ====== 5) Render + paginación progresiva ======
  const PAGE_SIZE = 12;
  let iso;                 // instancia Isotope
  let renderedCount = 0;   // ítems ya pintados

  function templateItem(item) {
    const classes = (item.categories || [])
      .map(c => `isotope-item ${categoryClass(c)}`).join(' ') || 'isotope-item';
    const loading = item.loading || "lazy";
    const decoding = item.decoding || (loading === "eager" ? "sync" : "async");
    const fetchpriority = item.fetchpriority || (loading === "eager" ? "high" : "low");

    return `
      <div class="col-lg-4 col-md-6 portfolio-item ${classes}">
        <img
          src="${item.thumb}"
          alt="${item.title}"
          class="img-fluid"
          loading="${loading}"
          decoding="${decoding}"
          fetchpriority="${fetchpriority}">
        <div class="portfolio-info">
          <h4>${item.title}</h4>
          <p>${item.description || ""}</p>
        </div>
      </div>`;
  }

  function renderChunk(containerEl, items, from, size) {
    const slice = items.slice(from, from + size);
    if (slice.length === 0) return;

    const tpl = document.createElement('div');
    tpl.innerHTML = slice.map(templateItem).join("");
    const nodes = Array.from(tpl.children);

    // Inserta en el DOM
    nodes.forEach(n => containerEl.appendChild(n));

    // Si hay imagesLoaded, espera las nuevas imágenes antes de avisar a Isotope
    const finalizeAppend = () => {
      if (iso) {
        iso.appended(nodes);
        iso.layout();
      } else if (typeof Isotope === "function") {
        iso = new Isotope(containerEl, {
          itemSelector: ".isotope-item",
          layoutMode: "masonry"
        });
        // primer layout
        iso.layout();
      } else {
        console.warn("[portfolio-dynamic] Isotope no está disponible en la página.");
      }
      renderedCount += slice.length;
    };

    if (typeof imagesLoaded === "function") {
      imagesLoaded(nodes, { background: true }, finalizeAppend);
    } else {
      // sin imagesLoaded, hacemos un pequeño delay para que carguen los tamaños
      setTimeout(finalizeAppend, 30);
    }
  }

  // ====== 6) Inicializa filtros + carga progresiva ======
  function initPortfolio(options) {
    const {
      filtersSelector = "#portfolio-filters",
      containerSelector = "#portfolio-container",
      items = itemsWithDefaults
    } = options || {};

    const filtersEl = document.querySelector(filtersSelector);
    const containerEl = document.querySelector(containerSelector);

    if (!filtersEl || !containerEl) {
      console.warn("[portfolio-dynamic] No se encontraron los contenedores requeridos.");
      return;
    }

    // Filtros
    renderFilters(filtersEl, items);

    // Primer bloque
    renderChunk(containerEl, items, 0, PAGE_SIZE);

    // Click de filtros
    filtersEl.addEventListener("click", function (e) {
      if (e.target.tagName !== "LI") return;
      const filter = e.target.getAttribute("data-filter");

      filtersEl.querySelectorAll("li").forEach(li => li.classList.remove("filter-active"));
      e.target.classList.add("filter-active");

      if (iso) {
        iso.arrange({ filter });
      }
    });

    // Sentinel para cargar más al hacer scroll
    const sentinel = document.createElement('div');
    sentinel.id = 'portfolio-sentinel';
    // Lo ponemos después del contenedor (fuera del grid para no afectar layout)
    containerEl.parentElement.appendChild(sentinel);

    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      if (renderedCount >= items.length) return;
      renderChunk(containerEl, items, renderedCount, PAGE_SIZE);
    }, { rootMargin: '600px 0px' });

    io.observe(sentinel);

    // Recalcular layout al redimensionar
    window.addEventListener("resize", () => iso && iso.layout());
  }

  // Auto-init al cargar el DOM
  document.addEventListener("DOMContentLoaded", function () {
    initPortfolio();
  });

  // Exponer API por si quieres re-inicializar con otros datos
  window.PortfolioDynamic = { init: initPortfolio };

})();
