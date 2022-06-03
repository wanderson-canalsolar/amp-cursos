<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'site_cursos' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'root' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', '' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'E8@MeY%OTU#s>~0tHrg.pA-5`Jea5q0o$}=:`^pF;HMv5F5DCV34LK)D1CA[pC(h' );
define( 'SECURE_AUTH_KEY',  '**^7|dQy{7XZ=^]dr>aB]M[<m?4z49RcqJG?&|(MWk^[f9r^:>I!$,@.(Rc Nj6:' );
define( 'LOGGED_IN_KEY',    'q{?n`c&,sYsl+MAfXb<`,@BBDr#$b3 S$(o I7No_UC_r/aCy}<LiaD)1>4Q{axO' );
define( 'NONCE_KEY',        'Rk5mZ`8[&3>%{^5RUofLL- #{D;Gs><<f8iQ,_U<#kI`AxsZ79j.[#KEx9a;E.|T' );
define( 'AUTH_SALT',        'SD/S+xwD&[c2+[md&G 3t<Uyq%r1P*|Ip5FhEueJG1zB71?5[f!2ps%:eg^(z8z(' );
define( 'SECURE_AUTH_SALT', 'SeP5l(-j3R(Jvx! c6bX5,clubNPt,SPAZG1.gLLGi0Q6=^YI^ieSdft8fU>2)We' );
define( 'LOGGED_IN_SALT',   '`md1:pLr)y[fpx}I3CN)_rLD1RV|^Imm8?2Zf*eKex#8@}^p8+SS6[UhRN1d68tF' );
define( 'NONCE_SALT',       '{Q.Y~!1d])RAeEWQ`O>s*df^fZN$[yz2tlmXTd/Fps*?rjl>N/ C4xXV}cJ/msYb' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_site_cursos_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
define('FS_METHOD', 'direct');
define('WP_MAPS_API_KEY', 	'AIzaSyDbM-cVqIpVV-CrdHS7qh5ix8vlgTj1ngo');

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';

