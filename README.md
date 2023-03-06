# Discord-bot
this is an interview bot for discord platform which uses OpenAI API

<div align="center">
	<br />
	<p>
		<a href="https://discord.js.org"><img src="https://discord.js.org/static/logo.svg" width="546" alt="discord.js" /></a>
	</p>
	<br />
</div>

## About

discord.js is a powerful [Node.js](https://nodejs.org) module that allows you to easily interact with the
[Discord API](https://discord.com/developers/docs/intro).

- Object-oriented
- Predictable abstractions
- Performant
- 100% coverage of the Discord API

## Installation

**Node.js 16.9.0 or newer is required.**

```sh-session
npm install discord.js
yarn add discord.js
pnpm add discord.js
```
## Example usage

Install discord.js:

```sh-session
npm install discord.js
yarn add discord.js
pnpm add discord.js
```

Register a slash command against the Discord API:

```js
const { REST, Routes } = require('discord.js');

const commands = [
	{
		name: 'ping',
		description: 'Replies with Pong!',
	},
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
```

Afterwards we can create a quite simple example bot:

```js
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
	}
});

client.login(TOKEN);
```

## Links

- [Website][website] ([source][website-source])
- [Documentation][documentation]
- [Guide][guide] ([source][guide-source])
  See also the [Update Guide][guide-update], including updated and removed items in the library.
- [discord.js Discord server][discord]
- [Discord API Discord server][discord-api]
- [GitHub][source]
- [npm][npm]
- [Related libraries][related-libs]

### Extensions

- [RPC][rpc] ([source][rpc-source])

## Contributing

Before creating an issue, please ensure that it hasn't already been reported/suggested, and double-check the
[documentation][documentation].  
See [the contribution guide][contributing] if you'd like to submit a PR.

## Help

If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to join our official [discord.js Server][discord].

[website]: https://discord.js.org/
[website-source]: https://github.com/discordjs/discord.js/tree/main/apps/website
[documentation]: https://discord.js.org/#/docs
[guide]: https://discordjs.guide/
[guide-source]: https://github.com/discordjs/guide
[guide-update]: https://discordjs.guide/additional-info/changes-in-v14.html
[discord]: https://discord.gg/djs
[discord-api]: https://discord.gg/discord-api
[source]: https://github.com/discordjs/discord.js/tree/main/packages/discord.js
[npm]: https://www.npmjs.com/package/discord.js
[related-libs]: https://discord.com/developers/docs/topics/community-resources#libraries
[rpc]: https://www.npmjs.com/package/discord-rpc
[rpc-source]: https://github.com/discordjs/RPC
[contributing]: https://github.com/discordjs/discord.js/blob/main/.github/CONTRIBUTING.md
