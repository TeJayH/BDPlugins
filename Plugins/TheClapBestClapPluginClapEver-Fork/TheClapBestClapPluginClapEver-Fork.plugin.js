/**
 * @name TheClapBestClapPluginClapEver-Fork
 * @authorLink https://github.com/TeJayH
 * @source https://github.com/TeJayH/BDPlugins/blob/master/Plugins/TheClapBestClapPluginClapEver-Fork/TheClapBestClapPluginClapEver-Fork.plugin.js
 */

module.exports = (() =>
{
    const config =
    {
		info:
		{
			name: "TheClapBestClapPluginClapEver-Fork",
			authors:
			[
				{
					name: "TeJay (Base by Metalloriff)",
				}
			],
			version: "2.1.8",
			description: "Literally useless, toxic cancer. Triggers are [b$ - Replace B's with the B emoji, block$ - Replace letters with block script, brail$ - Replace letters with brail, bubble$ - Replace letters and numbers with with bubble script, clapclap$ - inserts clap emojis between words, fancy$ - Replace letters with handwritten script, goth$ - Replace letters with the font you'd see on a 40yr olds midlife crisis tattoo, morse$ - Replace letters and numbers with morse code, owo$ - owoifys the text and adds a random UwU face, ra$ - Replaces letters and numbers with the emoji version, reverse$ - Reverses the text, superclapclap$ - Adds a clap after every letter, woke$ - TaLkS LiKe tHis]",		},
		changelog:
		[
			{
				title: "2.1.8",
				type: "Changed",
				items:
				[
					"Fixed ra$ so capitals don't break it."
				]
			}
		]
    };

    return (([Plugin, Api]) => {

		const plugin = (Plugin, Api) =>
		{
			const { DiscordModules, Patcher } = Api;

			return class TheClapBestClapPluginClapEverFork extends Plugin
			{
				constructor()
				{
					super();
				}
	
				onStart()
				{
					Patcher.after(DiscordModules.MessageActions, "sendMessage", (_, [, message]) =>
					{
						const content = message.content.toLowerCase();
						const clapclap = (/^clapclap(\S| )*\$/g).exec(content) || (/^superclapclap(\S| )*\$/g).exec(content);
						
						if (clapclap)
						{	
							const filler = clapclap[0].includes("(") && clapclap[0].includes(")")
								? clapclap[0].substr(clapclap[0].indexOf("(") + 1, clapclap[0].indexOf(")") - clapclap[0].indexOf("(") - 1)
								: " :clap: ";
								
							message.content = message.content.substr(clapclap[0].length, message.content.length)
								.split(clapclap[0].startsWith("super") ? "" : " ")
								.join(filler);
								
							message.content = filler + message.content + filler;

							return;
						}

						switch (content.split("$")[0])
						{
							case "ra":
								const ra = (/^ra\$/g).exec(content);

								message.content = message.content.toLowerCase().substr(ra[0].length, message.content.length)
									.split(" ")
									.join("\t")
									.replace(/[A-Za-z]/g, x => ` :regional_indicator_${x}: `);
								
								break;

							case "reverse":
								const reverse = (/^reverse\$/g).exec(content);

								message.content = message.content.substr(reverse[0].length, message.content.length)
									.split("")
									.reverse()
									.join("");

								break;

							case "owo":
								const owo = (/^owo\$/g).exec(content);

								message.content = message.content.substr(owo[0].length, message.content.length)
									.replace(/r/g, "w")
									.replace(/R/g, "W")
									.replace(/l/g, "w")
									.replace(/L/g, "W")
									.replace(/ n/g, " ny")
									.replace(/ N/g, " Ny")
									.replace(/ove/g, "uv")
									.replace(/OVE/g, "UV")
									+ " " + ["owo", "OwO", "uwu", "UwU", ">w<", "^w^", "???w???"][7 * Math.random() << 0];

								break;

							case "b":
								const b = (/^b\$/g).exec(content);

								message.content = message.content.substr(b[0].length, message.content.length)
									.replace(/b/g, ":b:");

								break;
							
							case "woke":
								const woke = (/^woke\$/g).exec(content);

								message.content = message.content.substr(woke[0].length, message.content.length)
									.replace(/.{2}/gm, c => c[0].toUpperCase() + c[1].toLowerCase());

								break;
							case "fancy":
								const fancy = (/^fancy\$/g).exec(content);

								message.content = message.content.substr(fancy[0].length, message.content.length)
									.replace(/a/g, "????")
									.replace(/b/g, "????")
									.replace(/c/g, "????")
									.replace(/d/g, "????")
									.replace(/e/g, "????")
									.replace(/f/g, "????")
									.replace(/g/g, "????")
									.replace(/h/g, "????")
									.replace(/i/g, "????")
									.replace(/j/g, "????")
									.replace(/k/g, "????")
									.replace(/l/g, "????")
									.replace(/m/g, "????")
									.replace(/n/g, "????")
									.replace(/o/g, "????")
									.replace(/p/g, "????")
									.replace(/q/g, "????")
									.replace(/r/g, "????")
									.replace(/s/g, "????")
									.replace(/t/g, "????")
									.replace(/u/g, "????")
									.replace(/v/g, "????")
									.replace(/w/g, "????")
									.replace(/x/g, "????")
									.replace(/y/g, "????")
									.replace(/z/g, "????")
									.replace(/A/g, "????")
									.replace(/B/g, "????")
									.replace(/C/g, "????")
									.replace(/D/g, "????")
									.replace(/E/g, "????")
									.replace(/F/g, "????")
									.replace(/G/g, "????")
									.replace(/H/g, "????")
									.replace(/I/g, "????")
									.replace(/J/g, "????")
									.replace(/K/g, "????")
									.replace(/L/g, "????")
									.replace(/M/g, "????")
									.replace(/N/g, "????")
									.replace(/O/g, "????")
									.replace(/P/g, "????")
									.replace(/Q/g, "????")
									.replace(/R/g, "????")
									.replace(/S/g, "????")
									.replace(/T/g, "????")
									.replace(/U/g, "????")
									.replace(/V/g, "????")
									.replace(/W/g, "????")
									.replace(/X/g, "????")
									.replace(/Y/g, "????")
									.replace(/Z/g, "????")
								break;

							case "goth":
								const goth = (/^goth\$/g).exec(content);

								message.content = message.content.substr(goth[0].length, message.content.length)
									.replace(/a/g, "????")
									.replace(/b/g, "????")
									.replace(/c/g, "????")
									.replace(/d/g, "????")
									.replace(/e/g, "????")
									.replace(/f/g, "????")
									.replace(/g/g, "????")
									.replace(/h/g, "????")
									.replace(/i/g, "????")
									.replace(/j/g, "????")
									.replace(/k/g, "????")
									.replace(/l/g, "????")
									.replace(/m/g, "????")
									.replace(/n/g, "????")
									.replace(/o/g, "????")
									.replace(/p/g, "????")
									.replace(/q/g, "????")
									.replace(/r/g, "????")
									.replace(/s/g, "????")
									.replace(/t/g, "????")
									.replace(/u/g, "????")
									.replace(/v/g, "????")
									.replace(/w/g, "????")
									.replace(/x/g, "????")
									.replace(/y/g, "????")
									.replace(/z/g, "????")
									.replace(/A/g, "????")
									.replace(/B/g, "????")
									.replace(/C/g, "????")
									.replace(/D/g, "????")
									.replace(/E/g, "????")
									.replace(/F/g, "????")
									.replace(/G/g, "????")
									.replace(/H/g, "????")
									.replace(/I/g, "????")
									.replace(/J/g, "????")
									.replace(/K/g, "????")
									.replace(/L/g, "????")
									.replace(/M/g, "????")
									.replace(/N/g, "????")
									.replace(/O/g, "????")
									.replace(/P/g, "????")
									.replace(/Q/g, "????")
									.replace(/R/g, "????")
									.replace(/S/g, "????")
									.replace(/T/g, "????")
									.replace(/U/g, "????")
									.replace(/V/g, "????")
									.replace(/W/g, "????")
									.replace(/X/g, "????")
									.replace(/Y/g, "????")
									.replace(/Z/g, "????")
								break;

							case "block":
								const block = (/^block\$/g).exec(content);

								message.content = message.content.substr(block[0].length, message.content.length)
									.replace(/a/g, "????")
									.replace(/b/g, "????")
									.replace(/c/g, "????")
									.replace(/d/g, "????")
									.replace(/e/g, "????")
									.replace(/f/g, "????")
									.replace(/g/g, "????")
									.replace(/h/g, "????")
									.replace(/i/g, "????")
									.replace(/j/g, "????")
									.replace(/k/g, "????")
									.replace(/l/g, "????")
									.replace(/m/g, "????")
									.replace(/n/g, "????")
									.replace(/o/g, "????")
									.replace(/p/g, "????")
									.replace(/q/g, "????")
									.replace(/r/g, "????")
									.replace(/s/g, "????")
									.replace(/t/g, "????")
									.replace(/u/g, "????")
									.replace(/v/g, "????")
									.replace(/w/g, "????")
									.replace(/x/g, "????")
									.replace(/y/g, "????")
									.replace(/z/g, "????")
									.replace(/A/g, "????")
									.replace(/B/g, "????")
									.replace(/C/g, "???")
									.replace(/D/g, "????")
									.replace(/E/g, "????")
									.replace(/F/g, "????")
									.replace(/G/g, "????")
									.replace(/H/g, "???")
									.replace(/I/g, "????")
									.replace(/J/g, "????")
									.replace(/K/g, "????")
									.replace(/L/g, "????")
									.replace(/M/g, "????")
									.replace(/N/g, "???")
									.replace(/O/g, "????")
									.replace(/P/g, "???")
									.replace(/Q/g, "???")
									.replace(/R/g, "???")
									.replace(/S/g, "????")
									.replace(/T/g, "????")
									.replace(/U/g, "????")
									.replace(/V/g, "????")
									.replace(/W/g, "????")
									.replace(/X/g, "????")
									.replace(/Y/g, "????")
									.replace(/Z/g, "???")
								break;

							case "bubble":
								const bubble = (/^bubble\$/g).exec(content);

								message.content = message.content.substr(bubble[0].length, message.content.length)
									.replace(/a/g, "???")
									.replace(/b/g, "???")
									.replace(/c/g, "???")
									.replace(/d/g, "???")
									.replace(/e/g, "???")
									.replace(/f/g, "???")
									.replace(/g/g, "???")
									.replace(/h/g, "???")
									.replace(/i/g, "???")
									.replace(/j/g, "???")
									.replace(/k/g, "???")
									.replace(/l/g, "???")
									.replace(/m/g, "???")
									.replace(/n/g, "???")
									.replace(/o/g, "???")
									.replace(/p/g, "???")
									.replace(/q/g, "???")
									.replace(/r/g, "???")
									.replace(/s/g, "???")
									.replace(/t/g, "???")
									.replace(/u/g, "???")
									.replace(/v/g, "???")
									.replace(/w/g, "???")
									.replace(/x/g, "???")
									.replace(/y/g, "???")
									.replace(/z/g, "???")
									.replace(/A/g, "???")
									.replace(/B/g, "???")
									.replace(/C/g, "???")
									.replace(/D/g, "???")
									.replace(/E/g, "???")
									.replace(/F/g, "???")
									.replace(/G/g, "???")
									.replace(/H/g, "???")
									.replace(/I/g, "???")
									.replace(/J/g, "???")
									.replace(/K/g, "???")
									.replace(/L/g, "???")
									.replace(/M/g, "???")
									.replace(/N/g, "???")
									.replace(/O/g, "???")
									.replace(/P/g, "???")
									.replace(/Q/g, "???")
									.replace(/R/g, "???")
									.replace(/S/g, "???")
									.replace(/T/g, "???")
									.replace(/U/g, "???")
									.replace(/V/g, "???")
									.replace(/W/g, "???")
									.replace(/X/g, "???")
									.replace(/Y/g, "???")
									.replace(/Z/g, "???")
									.replace(/0/g, "???")
									.replace(/1/g, "???")
									.replace(/2/g, "???")
									.replace(/3/g, "???")
									.replace(/4/g, "???")
									.replace(/5/g, "???")
									.replace(/6/g, "???")
									.replace(/7/g, "???")
									.replace(/8/g, "???")
									.replace(/9/g, "???")
								break;
							case "brail":
								const brail = (/^brail\$/g).exec(content);

								message.content = message.content.substr(brail[0].length, message.content.length)
									.replace(/a/g, "???")
									.replace(/b/g, "???")
									.replace(/c/g, "???")
									.replace(/d/g, "???")
									.replace(/e/g, "???")
									.replace(/f/g, "???")
									.replace(/g/g, "???")
									.replace(/h/g, "???")
									.replace(/i/g, "???")
									.replace(/j/g, "???")
									.replace(/k/g, "???")
									.replace(/l/g, "???")
									.replace(/m/g, "???")
									.replace(/n/g, "???")
									.replace(/o/g, "???")
									.replace(/p/g, "???")
									.replace(/q/g, "???")
									.replace(/r/g, "???")
									.replace(/s/g, "???")
									.replace(/t/g, "???")
									.replace(/u/g, "???")
									.replace(/v/g, "???")
									.replace(/w/g, "???")
									.replace(/x/g, "???")
									.replace(/y/g, "???")
									.replace(/z/g, "???")
									.replace(/A/g, "???")
									.replace(/B/g, "???")
									.replace(/C/g, "???")
									.replace(/D/g, "???")
									.replace(/E/g, "???")
									.replace(/F/g, "???")
									.replace(/G/g, "???")
									.replace(/H/g, "???")
									.replace(/I/g, "???")
									.replace(/J/g, "???")
									.replace(/K/g, "???")
									.replace(/L/g, "???")
									.replace(/M/g, "???")
									.replace(/N/g, "???")
									.replace(/O/g, "???")
									.replace(/P/g, "???")
									.replace(/Q/g, "???")
									.replace(/R/g, "???")
									.replace(/S/g, "???")
									.replace(/T/g, "???")
									.replace(/U/g, "???")
									.replace(/V/g, "???")
									.replace(/W/g, "???")
									.replace(/X/g, "???")
									.replace(/Y/g, "???")
									.replace(/Z/g, "???")
									.replace(/0/g, "???")
									.replace(/1/g, "???")
									.replace(/2/g, "???")
									.replace(/3/g, "???")
									.replace(/4/g, "???")
									.replace(/5/g, "???")
									.replace(/6/g, "???")
									.replace(/7/g, "???")
									.replace(/8/g, "???")
									.replace(/9/g, "???")
									.replace(/!/g, "???")
									.replace(/#/g, "???")
									.replace(/%/g, "???")
									.replace(/&/g, "???")
									.replace(/'/g, "???")
									.replace(/,/g, "???")
									.replace(/-/g, "???")
									.replace(/:/g, "???")
									.replace(/;/g, "???")
									.replace(/</g, "???")
									.replace(/=/g, "???")
									.replace(/>/g, "???")
									.replace(/@/g, "???")
									.replace(/\//g, "???")
									.replace(/\./g, "???")
									.replace(/\[/g, "???")
									.replace(/\]/g, "???")
									.replace(/\*/g, "???")
									.replace(/\+/g, "???")
									.replace(/\?/g, "???")
									.replace(/\^/g, "???")
									.replace(/\$/g, "???")
									.replace(/\"/g, "???")
									.replace(/\\/g, "???")
									.replace(/\(/g, "???")
									.replace(/\)/g, "???")
								break;

							case "morse":
								const morse = (/^morse\$/g).exec(content);
								console.log(message.content)
								message.content = message.content.substr(morse[0].length, message.content.length)
									.replace(/ /g, "  ")
									.replace(/\./g, "")
									.replace(/-/g, "")
									.replace(/a/g, ".- ")
									.replace(/b/g, "-... ")
									.replace(/c/g, "-.-. ")
									.replace(/d/g, "-.. ")
									.replace(/e/g, ". ")
									.replace(/f/g, "..-. ")
									.replace(/g/g, "--. ")
									.replace(/h/g, ".... ")
									.replace(/i/g, ".. ")
									.replace(/j/g, ".--- ")
									.replace(/k/g, "-.- ")
									.replace(/l/g, ".-.. ")
									.replace(/m/g, "-- ")
									.replace(/n/g, "-. ")
									.replace(/o/g, "--- ")
									.replace(/p/g, ".--. ")
									.replace(/q/g, "--.- ")
									.replace(/r/g, ".-. ")
									.replace(/s/g, "... ")
									.replace(/t/g, "- ")
									.replace(/u/g, "..- ")
									.replace(/v/g, "...- ")
									.replace(/w/g, ".-- ")
									.replace(/x/g, "-..- ")
									.replace(/y/g, "-.-- ")
									.replace(/z/g, "--.. ")
									.replace(/A/g, ".- ")
									.replace(/B/g, "-... ")
									.replace(/C/g, "-.-. ")
									.replace(/D/g, "-.. ")
									.replace(/E/g, ". ")
									.replace(/F/g, "..-. ")
									.replace(/G/g, "--. ")
									.replace(/H/g, ".... ")
									.replace(/I/g, ".. ")
									.replace(/J/g, ".--- ")
									.replace(/K/g, "-.- ")
									.replace(/L/g, ".-.. ")
									.replace(/M/g, "-- ")
									.replace(/N/g, "-. ")
									.replace(/O/g, "--- ")
									.replace(/P/g, ".--. ")
									.replace(/Q/g, "--.- ")
									.replace(/R/g, ".-. ")
									.replace(/S/g, "... ")
									.replace(/T/g, "- ")
									.replace(/U/g, "..- ")
									.replace(/V/g, "...- ")
									.replace(/W/g, ".-- ")
									.replace(/X/g, "-..- ")
									.replace(/Y/g, "-.-- ")
									.replace(/Z/g, "--.. ")
									.replace(/0/g, "----- ")
									.replace(/1/g, ".---- ")
									.replace(/2/g, "..--- ")
									.replace(/3/g, "...-- ")
									.replace(/4/g, "....- ")
									.replace(/5/g, "..... ")
									.replace(/6/g, "-.... ")
									.replace(/7/g, "--... ")
									.replace(/8/g, "---.. ")
									.replace(/9/g, "----. ")
									.replace(/!/g, "-.-.--")
									.replace(/&/g, ".-...")
									.replace(/'/g, ".----.")
									.replace(/,/g, "--..--")
									.replace(/:/g, "---...")
									.replace(/;/g, "-.-.-.")
									.replace(/=/g, "-...-")
									.replace(/@/g, ".--.-.")
									.replace(/\"/g, ".-..-.")
									.replace(/\$/g, "...-..-")
									.replace(/\+/g, ".-.-.")
									.replace(/\//g, "-..-.")
									.replace(/\?/g, "..--..")
									.replace(/\(/g, "-.--.")
									.replace(/\)/g, "-.--.-")
								break;
						}
					});
				}
	
				onStop()
				{
					Patcher.unpatchAll();
				}
			}
		};

        return plugin(Plugin, Api);
    })(global.ZeresPluginLibrary.buildPlugin(config));
})();
