# Signadex CLI

## Installation

```bash
# Install globally
bun install -g @signadex/cli
```


## Usage

### Aliases

signadex with alias `sdx`
ls with alias `ls`

#### Example

```bash
# List all assets
sdx ls assets 

# List all brands
sdx ls brands
```

### Commands

`list`/`ls` - List assets or brands

```bash
# List all assets
signadex list assets

# List all brands
signadex list brands

# Filter by format
signadex list --format <format>

# Filter by brand
signadex list --brand <brand>
```

### Options

- `--brand <brand>` - Filter by brand name
- `--format <format>` - Filter by asset format (png, svg)
- `--help` - Show help information
- `--type <type>` - Filter by asset type (app icon, brandmark, lettermark, lockup, wordmark)
- `--version` - Show version information