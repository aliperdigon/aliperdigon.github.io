/* portfolio-dynamic.js
 * Renderiza filtros e ítems de un portafolio (Isotope + GLightbox) desde un arreglo JSON.
 * Requisitos: incluir Isotope y GLightbox antes de este script. Recomendado: imagesLoaded.
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
      thumb: "assets/img/Fachada San Francisco/fachada_1.jpg",
      full:  "assets/img/Fachada San Francisco/fachada_1.jpg",
      gallery: "portfolio-gallery-fachada-san-francisco",
      categories: ["Fachada San Francisco"]
    },
    {
      title: "Fajas Colombianas",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fajas Colombianas/fajas_1.jpg",
      full:  "assets/img/Fajas Colombianas/fajas_1.jpg",
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
      thumb: "assets/img/Pilates Angels/pilates_1.jpg",
      full:  "assets/img/Pilates Angels/pilates_1.jpg",
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
      thumb: "assets/img/Roof Garden/roof_1.jpg",
      full:  "assets/img/Roof Garden/roof_1.jpg",
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
      thumb: "assets/img/Fachada San Francisco/fachada_2.jpg",
      full:  "assets/img/Fachada San Francisco/fachada_2.jpg",
      gallery: "portfolio-gallery-fachada-san-francisco",
      categories: ["Fachada San Francisco"]
    },
    {
      title: "Fajas Colombianas",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fajas Colombianas/fajas_2.jpg",
      full:  "assets/img/Fajas Colombianas/fajas_2.jpg",
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
      thumb: "assets/img/Pilates Angels/pilates_2.jpg",
      full:  "assets/img/Pilates Angels/pilates_2.jpg",
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
      thumb: "assets/img/Roof Garden/roof_2.jpg",
      full:  "assets/img/Roof Garden/roof_2.jpg",
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
      thumb: "assets/img/Fachada San Francisco/fachada_3.jpg",
      full:  "assets/img/Fachada San Francisco/fachada_3.jpg",
      gallery: "portfolio-gallery-fachada-san-francisco",
      categories: ["Fachada San Francisco"]
    },
    {
      title: "Fajas Colombianas",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fajas Colombianas/fajas_3.jpg",
      full:  "assets/img/Fajas Colombianas/fajas_3.jpg",
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
      thumb: "assets/img/Pilates Angels/pilates_3.jpg",
      full:  "assets/img/Pilates Angels/pilates_3.jpg",
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
      thumb: "assets/img/Roof Garden/roof_3.jpg",
      full:  "assets/img/Roof Garden/roof_3.jpg",
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
      thumb: "assets/img/Fachada San Francisco/fachada_4.jpg",
      full:  "assets/img/Fachada San Francisco/fachada_4.jpg",
      gallery: "portfolio-gallery-fachada-san-francisco",
      categories: ["Fachada San Francisco"]
    },
    {
      title: "Fajas Colombianas",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fajas Colombianas/fajas_4.jpg",
      full:  "assets/img/Fajas Colombianas/fajas_4.jpg",
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
      thumb: "assets/img/Pilates Angels/pilates_4.jpg",
      full:  "assets/img/Pilates Angels/pilates_4.jpg",
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
      thumb: "assets/img/Roof Garden/roof_4.jpg",
      full:  "assets/img/Roof Garden/roof_4.jpg",
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
      thumb: "assets/img/Fachada San Francisco/fachada_5.jpg",
      full:  "assets/img/Fachada San Francisco/fachada_5.jpg",
      gallery: "portfolio-gallery-fachada-san-francisco",
      categories: ["Fachada San Francisco"]
    },
    {
      title: "Fajas Colombianas",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fajas Colombianas/fajas_5.jpg",
      full:  "assets/img/Fajas Colombianas/fajas_5.jpg",
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
      thumb: "assets/img/Pilates Angels/pilates_5.jpg",
      full:  "assets/img/Pilates Angels/pilates_5.jpg",
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
      thumb: "assets/img/Roof Garden/roof_5.jpg",
      full:  "assets/img/Roof Garden/roof_5.jpg",
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
      thumb: "assets/img/Fachada San Francisco/fachada_6.jpg",
      full:  "assets/img/Fachada San Francisco/fachada_6.jpg",
      gallery: "portfolio-gallery-fachada-san-francisco",
      categories: ["Fachada San Francisco"]
    },
    {
      title: "Fajas Colombianas",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fajas Colombianas/fajas_6.jpg",
      full:  "assets/img/Fajas Colombianas/fajas_6.jpg",
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
      thumb: "assets/img/Fachada San Francisco/fachada_7.jpg",
      full:  "assets/img/Fachada San Francisco/fachada_7.jpg",
      gallery: "portfolio-gallery-fachada-san-francisco",
      categories: ["Fachada San Francisco"]
    },
    {
      title: "Fajas Colombianas",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fajas Colombianas/fajas_7.jpg",
      full:  "assets/img/Fajas Colombianas/fajas_7.jpg",
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
      thumb: "assets/img/Fachada San Francisco/fachada_8.jpg",
      full:  "assets/img/Fachada San Francisco/fachada_8.jpg",
      gallery: "portfolio-gallery-fachada-san-francisco",
      categories: ["Fachada San Francisco"]
    },
    {
      title: "Fajas Colombianas",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fajas Colombianas/fajas_8.jpg",
      full:  "assets/img/Fajas Colombianas/fajas_8.jpg",
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
      thumb: "assets/img/Fachada San Francisco/fachada_9.jpg",
      full:  "assets/img/Fachada San Francisco/fachada_9.jpg",
      gallery: "portfolio-gallery-fachada-san-francisco",
      categories: ["Fachada San Francisco"]
    },
    {
      title: "Fajas Colombianas",
      description: "Ejecución de Obra",
      thumb: "assets/img/Fajas Colombianas/fajas_9.jpg",
      full:  "assets/img/Fajas Colombianas/fajas_9.jpg",
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
      thumb: "assets/img/Fajas Colombianas/fajas_10.jpg",
      full:  "assets/img/Fajas Colombianas/fajas_10.jpg",
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

  // ====== 4) Render de tarjetas ======
  function renderItems(containerEl, items) {
    const html = items.map(item => {
      const classes = (item.categories || [])
        .map(categoryClass).join(" ");

      return `
      <div class="col-lg-4 col-md-6 portfolio-item isotope-item ${classes}">
        <img src="${item.thumb}" class="img-fluid" alt="${item.title}">
        <div class="portfolio-info">
          <h4>${item.title}</h4>
          <p>${item.description || ""}</p>
        </div>
      </div>`;
    }).join("");

    containerEl.innerHTML = html;
  }

  // ====== 5) Inicializa Isotope + filtros + GLightbox ======
  function initPortfolio(options) {
    const {
      filtersSelector = "#portfolio-filters",
      containerSelector = "#portfolio-container",
      items = portfolioItems
    } = options || {};

    const filtersEl = document.querySelector(filtersSelector);
    const containerEl = document.querySelector(containerSelector);

    if (!filtersEl || !containerEl) {
      console.warn("[portfolio-dynamic] No se encontraron los contenedores requeridos.");
      return;
    }

    renderFilters(filtersEl, items);
    renderItems(containerEl, items);

    function doIsotopeInit() {
      if (typeof Isotope !== "function") {
        console.warn("[portfolio-dynamic] Isotope no está disponible en la página.");
        return;
      }
      const iso = new Isotope(containerEl, {
        itemSelector: ".isotope-item",
        layoutMode: "masonry"
      });

      // Click de filtros
      filtersEl.addEventListener("click", function (e) {
        if (e.target.tagName !== "LI") return;
        const filter = e.target.getAttribute("data-filter");

        // activa visualmente
        filtersEl.querySelectorAll("li").forEach(li => li.classList.remove("filter-active"));
        e.target.classList.add("filter-active");

        iso.arrange({ filter });
      });

      // Recalcular cuando cambie el tamaño y tras imágenes
      window.addEventListener("resize", () => iso.layout());

      // GLightbox (opcional)
      if (typeof GLightbox === "function") {
        GLightbox({ selector: ".glightbox" });
      } else {
        console.warn("[portfolio-dynamic] GLightbox no está disponible en la página.");
      }
    }

    // Espera a que todas las imágenes estén cargadas para evitar cortes/cropping
    const imgsLoadedAvailable = (typeof imagesLoaded === "function");
    if (imgsLoadedAvailable) {
      imagesLoaded(containerEl, { background: true }, function () {
        doIsotopeInit();
      });
    } else {
      // Fallback si no está imagesLoaded: intenta después de window.load
      if (document.readyState === "complete") {
        // Intenta un pequeño delay para que terminen de cargar
        setTimeout(doIsotopeInit, 50);
      } else {
        window.addEventListener("load", () => setTimeout(doIsotopeInit, 50));
      }
    }
  }

  // Auto-init al cargar el DOM
  document.addEventListener("DOMContentLoaded", function () {
    initPortfolio();
  });

  // También exponemos la función por si quieres llamarla manualmente con otras opciones
  window.PortfolioDynamic = { init: initPortfolio };

})();