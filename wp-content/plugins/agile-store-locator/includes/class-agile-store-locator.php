<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       http://agilelogix.com
 * @since      1.0.0
 *
 * @package    AgileStoreLocator
 * @subpackage AgileStoreLocator/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    AgileStoreLocator
 * @subpackage AgileStoreLocator/includes
 * @author     Your Name <email@agilelogix.com>
 */
class AgileStoreLocator {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      AgileStoreLocator_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $AgileStoreLocator    The string used to uniquely identify this plugin.
	 */
	protected $AgileStoreLocator;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {

		$this->AgileStoreLocator = 'agile-store-locator';
		$this->version = ASL_CVERSION;

		$this->load_dependencies();
		$this->set_locale();
		
		$this->plugin_admin = new AgileStoreLocator_Admin( $this->get_AgileStoreLocator(), $this->get_version() );
		
		//FRONTEND HOOOKS
		$this->plugin_public = new AgileStoreLocator_Public( $this->get_AgileStoreLocator(), $this->get_version() );
		add_action('wp_ajax_asl_load_stores', array($this->plugin_public, 'load_stores'));	
		add_action('wp_ajax_nopriv_asl_load_stores', array($this->plugin_public, 'load_stores'));	

		

		if (is_admin()) 
			$this->define_admin_hooks();
		else
			$this->define_public_hooks();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - AgileStoreLocator_Loader. Orchestrates the hooks of the plugin.
	 * - AgileStoreLocator_i18n. Defines internationalization functionality.
	 * - AgileStoreLocator_Admin. Defines all hooks for the admin area.
	 * - AgileStoreLocator_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once ASL_PLUGIN_PATH . 'includes/class-agile-store-locator-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once ASL_PLUGIN_PATH . 'includes/class-agile-store-locator-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once ASL_PLUGIN_PATH . 'admin/class-agile-store-locator-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once ASL_PLUGIN_PATH . 'public/class-agile-store-locator-public.php';

		$this->loader = new AgileStoreLocator_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the AgileStoreLocator_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new AgileStoreLocator_i18n();
		$plugin_i18n->set_domain( $this->get_AgileStoreLocator() );

		//$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

		add_action( 'plugins_loaded', array($this, 'load_plugin_textdomain') );
		//$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}

	public function load_plugin_textdomain() {


		$domain 		= 'asl_locator';
		$admin_domain 	= 'asl_admin';


		$mo_file  		= WP_LANG_DIR . '/' . $domain . '/' . $domain . '-' . get_locale() . '.mo';
		$mo_admin_file 	= WP_LANG_DIR . '/' . $admin_domain . '/' . $admin_domain . '-' . get_locale() . '.mo';

		//Plugin Frontend
		load_textdomain( $domain, $mo_file ); 
		load_plugin_textdomain( $domain, false, ASL_BASE_PATH . '/languages/');


		//Load the Admin Language File
		if (is_admin()) {

			load_textdomain( $admin_domain, $mo_admin_file ); 
			load_plugin_textdomain( $admin_domain, false, ASL_BASE_PATH . '/languages/');
		}
	}


	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

	
		//ad menu if u r an admin
		add_action('admin_menu', array($this,'add_admin_menu'));
		add_action('wp_ajax_asl_upload_logo', array($this->plugin_admin, 'upload_logo'));	
		add_action('wp_ajax_asl_upload_marker', array($this->plugin_admin, 'upload_marker'));	
		/*For Stores*/
		add_action('wp_ajax_asl_add_store', array($this->plugin_admin, 'add_new_store'));	
		add_action('wp_ajax_asl_delete_all_stores', array($this->plugin_admin, 'admin_delete_all_stores'));	
		add_action('wp_ajax_asl_update_a_store', array($this->plugin_admin, 'update_store'));
		add_action('wp_ajax_asl_get_store_list', array($this->plugin_admin, 'get_store_list'));	
		add_action('wp_ajax_asl_delete_store', array($this->plugin_admin, 'delete_store'));	
		add_action('wp_ajax_asl_duplicate_store', array($this->plugin_admin, 'duplicate_store'));	
		add_action('wp_ajax_asl_validate_coords', array($this->plugin_admin, 'validate_coordinates'));	
		add_action('wp_ajax_asl_store_status', array($this->plugin_admin, 'store_status'));	

		/*Categories*/
		add_action('wp_ajax_asl_add_categories', array($this->plugin_admin, 'add_category'));
		add_action('wp_ajax_asl_delete_category', array($this->plugin_admin, 'delete_category'));
		add_action('wp_ajax_asl_update_category', array($this->plugin_admin, 'update_category'));
		add_action('wp_ajax_asl_get_category_byid', array($this->plugin_admin, 'get_category_by_id'));
		add_action('wp_ajax_asl_get_categories', array($this->plugin_admin, 'get_categories'));	

		/*Markers*/
		add_action('wp_ajax_asl_add_markers', array($this->plugin_admin, 'add_marker'));
		add_action('wp_ajax_asl_delete_marker', array($this->plugin_admin, 'delete_marker'));
		add_action('wp_ajax_asl_update_marker', array($this->plugin_admin, 'update_marker'));
		add_action('wp_ajax_asl_get_marker_byid', array($this->plugin_admin, 'get_marker_by_id'));
		add_action('wp_ajax_asl_get_markers', array($this->plugin_admin, 'get_markers'));	

		/*Import and settings*/
		add_action('wp_ajax_asl_import_store', array($this->plugin_admin, 'import_store'));	
		add_action('wp_ajax_asl_delete_import_file', array($this->plugin_admin, 'delete_import_file'));	
		add_action('wp_ajax_asl_upload_store_import_file', array($this->plugin_admin, 'upload_store_import_file'));
		add_action('wp_ajax_asl_export_file', array($this->plugin_admin, 'export_store'));
		add_action('wp_ajax_asl_save_setting', array($this->plugin_admin, 'save_setting'));
		add_action('wp_ajax_asl_save_custom_fields', array($this->plugin_admin, 'save_custom_fields'));	

		/*Infobox & Map*/
		//add_action('wp_ajax_asl_save_infobox', array($this->plugin_admin, 'save_infobox'));
		add_action('wp_ajax_asl_save_custom_map', array($this->plugin_admin, 'save_custom_map'));
		add_action('wp_ajax_asl_change_options', array($this->plugin_admin, 'change_options'));


		$this->loader->add_action( 'admin_enqueue_scripts', $this->plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $this->plugin_admin, 'enqueue_scripts' );

	}

	/*All Admin Callbacks*/
	public function add_admin_menu() {

		if (current_user_can('delete_posts')){
			$svg = 'dashicons-location';
			add_Menu_page('Agile Store Locator', __('AS Locator','asl_admin'), 'delete_posts', 'asl-plugin', array($this->plugin_admin,'admin_plugin_settings'),$svg);
			add_submenu_page( 'asl-plugin', __('Dashboard','asl_admin'), __('Dashboard','asl_admin'), 'delete_posts', 'agile-dashboard', array($this->plugin_admin,'admin_dashboard'));
			add_submenu_page( 'asl-plugin', __('Create New Store','asl_admin'), __('Add New Store','asl_admin'), 'delete_posts', 'create-agile-store', array($this->plugin_admin,'admin_add_new_store'));
			add_submenu_page( 'asl-plugin', __('Manage Stores','asl_admin'), __('Manage Stores','asl_admin'), 'delete_posts', 'manage-agile-store', array($this->plugin_admin,'admin_manage_store'));
			add_submenu_page( 'asl-plugin', __('Manage Categories','asl_admin'), __('Manage Categories','asl_admin'), 'delete_posts', 'manage-asl-categories', array($this->plugin_admin,'admin_manage_categories'));
			add_submenu_page( 'asl-plugin', __('Manage Markers','asl_admin'), __('Markers (Pro)','asl_admin'), 'delete_posts', 'manage-store-markers', array($this->plugin_admin,'admin_store_markers'));
			add_submenu_page( 'asl-plugin', __('Manage Logos','asl_admin'), __(' Logo (Pro)','asl_admin'), 'delete_posts', 'manage-store-logos', array($this->plugin_admin,'admin_store_logos'));
			add_submenu_page( 'asl-plugin', __('Import/Export Stores','asl_admin'), __('Import Stores (Pro)','asl_admin'), 'delete_posts', 'import-store-list', array($this->plugin_admin,'admin_import_stores'));
			//add_submenu_page( 'asl-plugin', 'InfoBox Maker', 'InfoBox Maker', 'delete_posts', 'infobox-maker', array($this->plugin_admin,'admin_info_box'));
			add_submenu_page( 'asl-plugin', __('Customize Map','asl_admin'), __('Customize Map (Pro)','asl_admin'), 'delete_posts', 'customize-map', array($this->plugin_admin,'admin_customize_map'));
			add_submenu_page( 'asl-plugin', __('ASL Settings','asl_admin'), __('ASL Settings','asl_admin'), 'delete_posts', 'user-settings', array($this->plugin_admin,'admin_user_settings'));
			
			add_submenu_page('asl-plugin-edit', __('Edit Store','asl_admin'), __('Edit Store','asl_admin'), 'delete_posts', 'edit-agile-store', array($this->plugin_admin,'edit_store'));
			remove_submenu_page( "asl-plugin", "asl-plugin" );
			remove_submenu_page( "asl-plugin", "asl-plugin-edit" );
			//edit-agile-store
        }
	}


	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks() {

		$this->loader->add_action( 'wp_enqueue_scripts', $this->plugin_public, 'register_styles' );

		//	29-Jan-2022 Registered through Public file
		//$this->loader->add_action( 'wp_enqueue_scripts', $this->plugin_public, 'register_scripts' );

    add_shortcode( 'ASL_STORELOCATOR', array($this->plugin_public, 'frontendStoreLocator'));
    add_shortcode( 'ASL_STORE', array($this->plugin_public, 'storePage'));
	}

	
	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_AgileStoreLocator() {
		return $this->AgileStoreLocator;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    AgileStoreLocator_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

}
