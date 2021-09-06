<?php 

/*
Plugin Name: Linking Tile Block
Description: A tile with color or image background. Tile can link to other site and have text inside.
Version: 1.0
Author: MJ
*/

if( ! defined( 'ABSPATH' ) ) exit;

class MJLinkingTile {
  function __construct() {
    add_action('init', array($this, 'adminAssets'));
  }

  function adminAssets() {
    wp_register_style('mjlinkingtilestyle', plugin_dir_url(__FILE__) . 'build/index.css');
    wp_register_script('mjlinkingtilescript', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    register_block_type('mj/linking-tile', array(
      'editor_script' => 'mjlinkingtilescript',
      'editor_style' => 'mjlinkingtilestyle',
      'render_callback' => array($this, 'theOutput')
    ));
  }

  function stylecheck($attributes) {
    $styles = "";

    if($attributes["imageUrl"]) {
      $img = esc_url($attributes["imageUrl"]);
      $darken = $attributes["darken"] ? $attributes["darken"] : 0;
      $styles = $styles . "background-image: linear-gradient(rgba(0, 0, 0, {$darken}), rgba(0, 0, 0, {$darken})), url({$img}); background-repeat: no-Repeat; background-size: cover; ";
    } if($attributes["backgroundColor"]) {
      $color = esc_html($attributes["backgroundColor"]);
      $styles = $styles . "background-color: {$color}; ";
    }
    $attributes["paddingTop"] ? $styles = $styles . "padding-top: {$attributes["paddingTop"]}px; " : $styles = $styles . "padding-top: 20px; ";
    $attributes["paddingBottom"] ? $styles = $styles . "padding-bottom: {$attributes["paddingBottom"]}px; " : $styles = $styles . "padding-bottom: 20px; ";
    echo $styles;
  }

  function theOutput($attributes, $content) {
    if(!is_admin()) {
      wp_enqueue_script('mjlinkingtilefrontendscript', plugin_dir_url(__FILE__). 'build/frontend.js');
      wp_enqueue_style('mjlinkingtilefrontstyle', plugin_dir_url(__FILE__). 'build/frontend.css');
    }

    $link = esc_url($attributes["link"]);

    ob_start(); ?>
    <?php echo $link ? "<a href={$link} target={$attributes["target"]} >" : "" ?>
      <div style="<?php $this->stylecheck($attributes); ?>" class="mj-linkingtile">
        <?php echo $content ?>
      </div>
    <?php echo $link ? "</a>" : "" ?>
    <?php return ob_get_clean();
  }
}

$mjLinkingTile = new MJLinkingTile();