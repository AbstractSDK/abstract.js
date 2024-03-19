# Abstract CLI

The Abstract CLI is a command-line tool for working with AbstractSDK apps and modules.

## Installation 

```bash
npm i -g @abstract-money/cli
```

## Usage

```sh
abstract <command> [options]
```

### Commands:
| Commands | Description | Options
| --- | --- | :--- |
| `generate` | generate code based on configuration | <pre>-c, --config <path>  [string] path to config file<br />-r, --root <path>    [string] root path<br />-h, --help           Display this message</pre> |
| `init` | create configuration file | |

### Options
| Option | Shorthand | Description |
| :---: | :---: | --- |
| `--help` | `-h` | Display Help |
| `--version` | `-v` | Display version number |

Try it out: 
```sh
abstract --help
```
