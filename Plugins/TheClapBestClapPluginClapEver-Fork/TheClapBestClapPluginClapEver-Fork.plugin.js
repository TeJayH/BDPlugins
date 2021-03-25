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
			version: "2.1.6",
			description: "Literally useless, toxic cancer. Triggers are [b$ - Replace B's with the B emoji, block$ - Replace letters with block script, brail$ - Replace letters with brail, bubble$ - Replace letters and numbers with with bubble script, clapclap$ - inserts clap emojis between words, fancy$ - Replace letters with handwritten script, goth$ - Replace letters with the font you'd see on a 40yr olds midlife crisis tattoo, morse$ - Replace letters and numbers with morse code, owo$ - owoifys the text and adds a random UwU face, ra$ - Replaces letters and numbers with the emoji version, reverse$ - Reverses the text, $superclapclap - Adds a clap after every letter, woke$ - TaLkS LiKe tHis]",		},
		changelog:
		[
			{
				title: "2.1.6",
				type: "Nothing",
				items:
				[
					"First Offical update, Checking autoupdate feature."
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

								message.content = message.content.substr(ra[0].length, message.content.length)
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
									+ " " + ["owo", "OwO", "uwu", "UwU", ">w<", "^w^", "♥w♥"][7 * Math.random() << 0];

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
									.replace(/a/g, "𝓪")
									.replace(/b/g, "𝓫")
									.replace(/c/g, "𝓬")
									.replace(/d/g, "𝓭")
									.replace(/e/g, "𝓮")
									.replace(/f/g, "𝓯")
									.replace(/g/g, "𝓰")
									.replace(/h/g, "𝓱")
									.replace(/i/g, "𝓲")
									.replace(/j/g, "𝓳")
									.replace(/k/g, "𝓴")
									.replace(/l/g, "𝓵")
									.replace(/m/g, "𝓶")
									.replace(/n/g, "𝓷")
									.replace(/o/g, "𝓸")
									.replace(/p/g, "𝓹")
									.replace(/q/g, "𝓺")
									.replace(/r/g, "𝓻")
									.replace(/s/g, "𝓼")
									.replace(/t/g, "𝓽")
									.replace(/u/g, "𝓾")
									.replace(/v/g, "𝓿")
									.replace(/w/g, "𝔀")
									.replace(/x/g, "𝔁")
									.replace(/y/g, "𝔂")
									.replace(/z/g, "𝔃")
									.replace(/A/g, "𝓐")
									.replace(/B/g, "𝓑")
									.replace(/C/g, "𝓒")
									.replace(/D/g, "𝓓")
									.replace(/E/g, "𝓔")
									.replace(/F/g, "𝓕")
									.replace(/G/g, "𝓖")
									.replace(/H/g, "𝓗")
									.replace(/I/g, "𝓘")
									.replace(/J/g, "𝓙")
									.replace(/K/g, "𝓚")
									.replace(/L/g, "𝓛")
									.replace(/M/g, "𝓜")
									.replace(/N/g, "𝓝")
									.replace(/O/g, "𝓞")
									.replace(/P/g, "𝓟")
									.replace(/Q/g, "𝓠")
									.replace(/R/g, "𝓡")
									.replace(/S/g, "𝓢")
									.replace(/T/g, "𝓣")
									.replace(/U/g, "𝓤")
									.replace(/V/g, "𝓥")
									.replace(/W/g, "𝓦")
									.replace(/X/g, "𝓧")
									.replace(/Y/g, "𝓨")
									.replace(/Z/g, "𝓩")
								break;

							case "goth":
								const goth = (/^goth\$/g).exec(content);

								message.content = message.content.substr(goth[0].length, message.content.length)
									.replace(/a/g, "𝖆")
									.replace(/b/g, "𝖇")
									.replace(/c/g, "𝖈")
									.replace(/d/g, "𝖉")
									.replace(/e/g, "𝖊")
									.replace(/f/g, "𝖋")
									.replace(/g/g, "𝖌")
									.replace(/h/g, "𝖍")
									.replace(/i/g, "𝖎")
									.replace(/j/g, "𝖏")
									.replace(/k/g, "𝖐")
									.replace(/l/g, "𝖑")
									.replace(/m/g, "𝖒")
									.replace(/n/g, "𝖓")
									.replace(/o/g, "𝖔")
									.replace(/p/g, "𝖕")
									.replace(/q/g, "𝖖")
									.replace(/r/g, "𝖗")
									.replace(/s/g, "𝖘")
									.replace(/t/g, "𝖙")
									.replace(/u/g, "𝖚")
									.replace(/v/g, "𝖛")
									.replace(/w/g, "𝖜")
									.replace(/x/g, "𝖝")
									.replace(/y/g, "𝖞")
									.replace(/z/g, "𝖟")
									.replace(/A/g, "𝕬")
									.replace(/B/g, "𝕭")
									.replace(/C/g, "𝕮")
									.replace(/D/g, "𝕯")
									.replace(/E/g, "𝕰")
									.replace(/F/g, "𝕱")
									.replace(/G/g, "𝕲")
									.replace(/H/g, "𝕳")
									.replace(/I/g, "𝕴")
									.replace(/J/g, "𝕵")
									.replace(/K/g, "𝕶")
									.replace(/L/g, "𝕷")
									.replace(/M/g, "𝕸")
									.replace(/N/g, "𝕹")
									.replace(/O/g, "𝕺")
									.replace(/P/g, "𝕻")
									.replace(/Q/g, "𝕼")
									.replace(/R/g, "𝕽")
									.replace(/S/g, "𝕾")
									.replace(/T/g, "𝕿")
									.replace(/U/g, "𝖀")
									.replace(/V/g, "𝖁")
									.replace(/W/g, "𝖂")
									.replace(/X/g, "𝖃")
									.replace(/Y/g, "𝖄")
									.replace(/Z/g, "𝖅")
								break;

							case "block":
								const block = (/^block\$/g).exec(content);

								message.content = message.content.substr(block[0].length, message.content.length)
									.replace(/a/g, "𝕒")
									.replace(/b/g, "𝕓")
									.replace(/c/g, "𝕔")
									.replace(/d/g, "𝕕")
									.replace(/e/g, "𝕖")
									.replace(/f/g, "𝕗")
									.replace(/g/g, "𝕘")
									.replace(/h/g, "𝕙")
									.replace(/i/g, "𝕚")
									.replace(/j/g, "𝕛")
									.replace(/k/g, "𝕜")
									.replace(/l/g, "𝕝")
									.replace(/m/g, "𝕞")
									.replace(/n/g, "𝕟")
									.replace(/o/g, "𝕠")
									.replace(/p/g, "𝕡")
									.replace(/q/g, "𝕢")
									.replace(/r/g, "𝕣")
									.replace(/s/g, "𝕤")
									.replace(/t/g, "𝕥")
									.replace(/u/g, "𝕦")
									.replace(/v/g, "𝕧")
									.replace(/w/g, "𝕨")
									.replace(/x/g, "𝕩")
									.replace(/y/g, "𝕪")
									.replace(/z/g, "𝕫")
									.replace(/A/g, "𝔸")
									.replace(/B/g, "𝔹")
									.replace(/C/g, "ℂ")
									.replace(/D/g, "𝔻")
									.replace(/E/g, "𝔼")
									.replace(/F/g, "𝔽")
									.replace(/G/g, "𝔾")
									.replace(/H/g, "ℍ")
									.replace(/I/g, "𝕀")
									.replace(/J/g, "𝕁")
									.replace(/K/g, "𝕂")
									.replace(/L/g, "𝕃")
									.replace(/M/g, "𝕄")
									.replace(/N/g, "ℕ")
									.replace(/O/g, "𝕆")
									.replace(/P/g, "ℙ")
									.replace(/Q/g, "ℚ")
									.replace(/R/g, "ℝ")
									.replace(/S/g, "𝕊")
									.replace(/T/g, "𝕋")
									.replace(/U/g, "𝕌")
									.replace(/V/g, "𝕍")
									.replace(/W/g, "𝕎")
									.replace(/X/g, "𝕏")
									.replace(/Y/g, "𝕐")
									.replace(/Z/g, "ℤ")
								break;

							case "bubble":
								const bubble = (/^bubble\$/g).exec(content);

								message.content = message.content.substr(bubble[0].length, message.content.length)
									.replace(/a/g, "ⓐ")
									.replace(/b/g, "ⓑ")
									.replace(/c/g, "ⓒ")
									.replace(/d/g, "ⓓ")
									.replace(/e/g, "ⓔ")
									.replace(/f/g, "ⓕ")
									.replace(/g/g, "ⓖ")
									.replace(/h/g, "ⓗ")
									.replace(/i/g, "ⓘ")
									.replace(/j/g, "ⓙ")
									.replace(/k/g, "ⓚ")
									.replace(/l/g, "ⓛ")
									.replace(/m/g, "ⓜ")
									.replace(/n/g, "ⓝ")
									.replace(/o/g, "ⓞ")
									.replace(/p/g, "ⓟ")
									.replace(/q/g, "ⓠ")
									.replace(/r/g, "ⓡ")
									.replace(/s/g, "ⓢ")
									.replace(/t/g, "ⓣ")
									.replace(/u/g, "ⓤ")
									.replace(/v/g, "ⓥ")
									.replace(/w/g, "ⓦ")
									.replace(/x/g, "ⓧ")
									.replace(/y/g, "ⓨ")
									.replace(/z/g, "ⓩ")
									.replace(/A/g, "Ⓐ")
									.replace(/B/g, "Ⓑ")
									.replace(/C/g, "Ⓒ")
									.replace(/D/g, "Ⓓ")
									.replace(/E/g, "Ⓔ")
									.replace(/F/g, "Ⓕ")
									.replace(/G/g, "Ⓖ")
									.replace(/H/g, "Ⓗ")
									.replace(/I/g, "Ⓘ")
									.replace(/J/g, "Ⓙ")
									.replace(/K/g, "Ⓚ")
									.replace(/L/g, "Ⓛ")
									.replace(/M/g, "Ⓜ")
									.replace(/N/g, "Ⓝ")
									.replace(/O/g, "Ⓞ")
									.replace(/P/g, "Ⓟ")
									.replace(/Q/g, "Ⓠ")
									.replace(/R/g, "Ⓡ")
									.replace(/S/g, "Ⓢ")
									.replace(/T/g, "Ⓣ")
									.replace(/U/g, "Ⓤ")
									.replace(/V/g, "Ⓥ")
									.replace(/W/g, "Ⓦ")
									.replace(/X/g, "Ⓧ")
									.replace(/Y/g, "Ⓨ")
									.replace(/Z/g, "Ⓩ")
									.replace(/0/g, "⓪")
									.replace(/1/g, "①")
									.replace(/2/g, "②")
									.replace(/3/g, "③")
									.replace(/4/g, "④")
									.replace(/5/g, "⑤")
									.replace(/6/g, "⑥")
									.replace(/7/g, "⑦")
									.replace(/8/g, "⑧")
									.replace(/9/g, "⑨")
								break;
							case "brail":
								const brail = (/^brail\$/g).exec(content);

								message.content = message.content.substr(brail[0].length, message.content.length)
									.replace(/a/g, "⠁")
									.replace(/b/g, "⠃")
									.replace(/c/g, "⠉")
									.replace(/d/g, "⠙")
									.replace(/e/g, "⠑")
									.replace(/f/g, "⠋")
									.replace(/g/g, "⠛")
									.replace(/h/g, "⠓")
									.replace(/i/g, "⠊")
									.replace(/j/g, "⠚")
									.replace(/k/g, "⠅")
									.replace(/l/g, "⠇")
									.replace(/m/g, "⠍")
									.replace(/n/g, "⠝")
									.replace(/o/g, "⠕")
									.replace(/p/g, "⠏")
									.replace(/q/g, "⠟")
									.replace(/r/g, "⠗")
									.replace(/s/g, "⠎")
									.replace(/t/g, "⠞")
									.replace(/u/g, "⠥")
									.replace(/v/g, "⠧")
									.replace(/w/g, "⠺")
									.replace(/x/g, "⠭")
									.replace(/y/g, "⠽")
									.replace(/z/g, "⠵")
									.replace(/A/g, "⠁")
									.replace(/B/g, "⠃")
									.replace(/C/g, "⠉")
									.replace(/D/g, "⠙")
									.replace(/E/g, "⠑")
									.replace(/F/g, "⠋")
									.replace(/G/g, "⠛")
									.replace(/H/g, "⠓")
									.replace(/I/g, "⠊")
									.replace(/J/g, "⠚")
									.replace(/K/g, "⠅")
									.replace(/L/g, "⠇")
									.replace(/M/g, "⠍")
									.replace(/N/g, "⠝")
									.replace(/O/g, "⠕")
									.replace(/P/g, "⠏")
									.replace(/Q/g, "⠟")
									.replace(/R/g, "⠗")
									.replace(/S/g, "⠎")
									.replace(/T/g, "⠞")
									.replace(/U/g, "⠥")
									.replace(/V/g, "⠧")
									.replace(/W/g, "⠺")
									.replace(/X/g, "⠭")
									.replace(/Y/g, "⠽")
									.replace(/Z/g, "⠵")
									.replace(/0/g, "⠴")
									.replace(/1/g, "⠂")
									.replace(/2/g, "⠆")
									.replace(/3/g, "⠒")
									.replace(/4/g, "⠲")
									.replace(/5/g, "⠢")
									.replace(/6/g, "⠖")
									.replace(/7/g, "⠶")
									.replace(/8/g, "⠦")
									.replace(/9/g, "⠔")
									.replace(/!/g, "⠮")
									.replace(/#/g, "⠼")
									.replace(/%/g, "⠩")
									.replace(/&/g, "⠯")
									.replace(/'/g, "⠄")
									.replace(/,/g, "⠠")
									.replace(/-/g, "⠤")
									.replace(/:/g, "⠱")
									.replace(/;/g, "⠰")
									.replace(/</g, "⠣")
									.replace(/=/g, "⠿")
									.replace(/>/g, "⠜")
									.replace(/@/g, "⠈")
									.replace(/\//g, "⠌")
									.replace(/\./g, "⠨")
									.replace(/\[/g, "⠪")
									.replace(/\]/g, "⠻")
									.replace(/\*/g, "⠡")
									.replace(/\+/g, "⠬")
									.replace(/\?/g, "⠹")
									.replace(/\^/g, "⠘")
									.replace(/\$/g, "⠫")
									.replace(/\"/g, "⠐")
									.replace(/\\/g, "⠳")
									.replace(/\(/g, "⠷")
									.replace(/\)/g, "⠾")
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
