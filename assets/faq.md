## I don't like/don't need the plugin in hindsight, can I get my money back?

Yes, 30 days, no questions asked.

## How do I connect the plugin to Airtable?

When you install the plugin it will ask you for your Airtable credentials once you start using it. This data is then stored inside the plugin and linked to the document so you only have to enter it once. You can edit these settings trough the plugins menu by navigating to:
`Plugins` → `Airtabledata Plugin` → `Change Settings`

## Where can I find the credentials/id's this plugin needs?

- **The Airtable API key**

    This is just a general key used to access your account's data, you can find it [here](https://airtable.com/account).

    It will look something like this: `keylvfoA3JvH2zJWA`

- **The base ID**

    This one is a bit more tricky to find. Navigate to the base you want to use. Click "Help" in the right upper corner and choose "API documentation" from the dropdown menu. You will be taken to a new page with all sorts of API info, we don't need this. The new page will have a url like this:
    [https://airtable.com/**YOUR_BASE_ID**/api/docs#curl/introduction](/)
    Copy the base id from the url.

    It will look something like this: `appETBtBnpoI6Bdpa`

- **The table name**

    You can use either the given name of the table here or it's ID. The given name is for example: "Table 1". The table ID can be copied from the URL when viewing the table.
    [https://airtable.com/**YOUR_TABLE_ID/~~~/?blocks=hide**](/)

    It will look something like this: `tblnK1ny0lJcI7A1A`

## How do the helper notations work?

Currently the following helpers are available:

- `#` The repeater

    **Example***:*  `# Apples 🍎` ➡ `🍎🍎🍎`

    Here the value of `Apples` is 3 which makes the plugin fill in the apple emoji 3 times, you can use any character you want here. These values correspond to ranges for example.

- `?` The conditional

    **Example***:* `? Apples yes no` ➡ `yes`

    Here the value of `Apples` is true which makes the plugin fill in word yes, if it would have been false no would have been filled. These values correspond to check-boxes for example.

- `>` The computer

    **Example***:*`` > `Hi ${FirstName} from ${Location}` `` ➡ `Hi Brian from Amsterdam`

    This helper uses Javascript to determine what the resulting value is. Here the value of `FirstName` and `Location` are Brian and Amsterdam respectively. As you can see you can use multiple data columns here.

Suggestions for new helpers are welcome

*Note: If you're using a helper column names are automatically converted to PascalCase*

## My columns have names with spaces is this a problem?

No, if you only want to fill the layer with your data without any helpers you can just use the name with spaces. If you do want to use a helper your layer's name automatically get's converted to PascalCase so you can use it without spaces:

*Example:*

`green fruits` ➡️ `GreenFruits`

`Red fruits` ➡️ `RedFruits`

`purple-fruits` ➡️ `GreenFruits`

`colors` ➡️ `Colors`

## My images are stored as links to an external location, can I still use them?

Sure! No problem at all!

## I want to fill some non-symbol layers with my Airtable data.

No problem, just select the plugin trough the `Layer` → `Data` menu.

## I want to get data from a specific record, is this possible?

Sure! Just append `@RECORD_ID` to the name of the symbol and it will fetch the data from that record. 
For example: `Test Symbol` would become: `Test Symbol @recb6HB2tIufAK8Oq`

*Finding the record ID:*

You can find the record ID by going to the record URL by either clicking the exand icon next to the record name or pressing the space bar whilst having a row selected. You can click "copy record URL" from the dropdown next to the record name and it will be the last parameter in this URL:
[https://airtable.com/~~~/~~~/**YOUR_RECORD_ID**](https://airtable.com/tblnK1ny0lJcI7A1A/viwpmti93gZanGURf/recBJnO7yBneJRfFM)
It will look something like this: `recBJnO7yBneJRfFM`
