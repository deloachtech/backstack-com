| Property | Type | Description |
| -------- | ---- | ----------- |
| `auth` | Mixed |  A boolean indication whether the session has been fully authenticated, or an array of values provided to complete the authentication process. See the [log-in workflow](login) for more information. |
| `demo` | Boolean |  Whether or not the session is in demo mode. |
| `app.id` | String | The app ID. |
| `app.title` | String | The app ID. |
| `app.created` | String | The app ID. |
| `app.login_url` | String | The URL for logging in. |
| `app.reset_url` | String | The URL for resetting passwords. |
| `app.signup_url` | String | The URL for signing up new accounts. |
| `app.network_url` | String | The URL for network invitations. |
| `app.stripe_pub_key` | String | The Stripe public key for te app. |
| `app.stripe_key_exists` | String | Whether or not the app has provided its Stripe restricted key. |
| `app.allow_signup` | Boolean | Whether or not the app has domains that allow for signing up new accounts. |
| `account.id` | String | The [account](account) ID. |
| `account.domain_id` | String | The domain ID for which the account was created under. |
| `account.version_id` | String | The current [version](versions) of application functionality the account is subscribed. |
| `account.title` | String | The title of the account. |
| `account.address` | String | The street address of the account. |
| `account.city` | String | The address city. |
| `account.state` | String | The address state. |
| `account.zip` | String | The address zip code. |
| `account.phone` | String | The phone number for the account. |
| `account.contact_name` | String | The contact name for the account. |
| `account.contact_email` | String | The contact persons email address. |
| `account.country_id` | String | The account [country](countries) ID. |
| `account.url` | String | The URL for the account website. |
| `account.is_app_account` | Boolean | Whether the account created the app. |
| `account.timezone_id` | String | The account [timezone](timezones) ID. |
| `account.utc_offset` | Integer | The accounts UTC timezone offset in seconds. Add this integer to any timestamped API data for converting to the accounts' timezone. |
| `account.counters` | Array |  An array of aggregated values for the current account [counters](counters). |
| `account.optional_features` | Array | An array of [optional features](optional-features) for which the account has subscribed. |
| `account.stats` | Array | An array of system-generated values you can use for managing resource usage. |
| `account.stats.user_count` | Integer | The count of account users. |
| `account.stats.children_count` | Integer | The child accounts networked under the account. |
| `account.stats.role_count` | Integer | The count of roles the account has active. |
| `user.id` | String | The users ID. |
| `user.username` | String | The users login name. |
| `user.name` | String | The users real name. |
| `user.email` | String | The users email address. |
| `user.avatar` | String | URL for the avatar image the user has provided for their profile. |
| `user.roles` | Array | Role IDs the user has been assigned. |
| `access` | Array | An array of access control for the current user. Array keys are [feature](features) IDs and values are CRUD permissions granted. See the [access control](access-control) page for more information. |
| `access_signature` | String | A signature of the current access control values. Use this value to check if cached access control has changed. See [caching access](#) for additional information. |
| `alerts` | Array | System and application alerts for display to the user. Array keys ate the alert IDs and the values are the texts to display. You can map the keys to routes for creating hyperlinks to pages. |
