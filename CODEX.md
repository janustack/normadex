# A Codex of Coding Standards and Conventions

## Table of Contents

- [Abbreviations](#abbreviation)
  - [General](#general)
  - [Math](#math)
  - [Units of Measurement](#units-of-measurement)
    - [Data Size](#data-size)
    - [Data Speed](#data-speed)
    - [Time](#time)
- [Conventions](#conventions)

## Abbreviations

A list of approved abbreviations to be used when a full name is overly verbose.

Some of these may not be practical or recommend for use case but are defined here for standardization regardless.

### General

- `arr` - array
- `idx` - index
- `rec` - recursion
- `reg` - register
- `iter` - iteration
- `val` - value
- `mid` - middle
- `tmp` - temporary
- `struct` - structure
- `loc` - lines of code
- `ll` - linked list
- `res` - result
- `alloc` - allocate
- `realloc` reallocate
- `ans` - answer
- `err` - error
- `var` - variable
- `ovf` - overflow
- `num` - number
- `rand` - random
- `std` - standard
- `vec` - vector
- `nor` - not or
- `xor` - exclusive or
- `lvl` - level
- `esc` - escape
- `obj` - object
- `cfg` - config
- `desc` - description
- `config` - configuration
- `int` - integer
- `exec` - execute
- `nav` - navigate
- `exe` - executable
- `arith` - arithmetic
- `lang` - language
- `eval` - evaluate
- `acy` - Andrew Christian Young
- `char` - character
- `attr` - attribute
- `cmp` - compare
- `concat` - concatenate
- `src` - source
- `dist` - distribution or distance
- `fn` or `func` - function
- `prev` - previous
- `pub` - public
- `const` - constant
- `env` - environment
- `fmt` - format
- `buf` - buffer
- `proto` - prototype or protocol
- `gen` - generate
- `curr` - current
- `utils` - utilities
- `glob` / `globs` - global(s)
- `init` - initialize or initialization
- `bench` - benchmark
- `deps` - dependencies
- `dev` - development
- `dest` - destination
- `str` - string
- `tt` - truth table
- `fib` - Fibonacci
- `mem` - memory
- `seg` - segmentation
- `memo` - memoization
- `seq` - sequence
- `cpy` - copy
- `doc` / `docs` - document(s)
- `fact` - factorial
- `ptr` - pointer
- `addr` - address
- `del` - delete
- `proc` - process
- `exec` - execute
- `exe` - executable
- `elem` / `elems` - element(s)
- `lit` - literal
- `rm` - remove
- `app` / `apps` - application(s)
- `rev` - reverse
- `ign` - ignore
- `lib` - library
- `pkg` - package
- `interop` - interoperability
- `repo` - repository
- `rep` - repeat or representation
- `opt` - optional or option
- `param` / `params` - parameter(s)
- `cnt` - count
- `alg` - algorithm
- `dbl` - double
- `eg` - example
- `cmd` - command
- `instr` - instruction
- `def` - definition
- `trav` - traverse or traversal
- `props` - properties
- `op` - operation
- `dup` - duplicate

- `ref` - reference
- `deref` - dereference

- `def` - defined
- `undef` - undefined

- `prt` - print
- `dis` - display

- `enc` - encode
- `dec` - decoding

- `inc` - increment
- `dec` - decrement

- `sync` - synchronous
- `async` - asynchronous

- `arg` / `args` - argument(s)
- `argc`or `argcnt` - argument count
- `argv` or `argvec` - argument vector

- `io` - Input/Output (I/O)
- `in` - input
- `out` - output

- `hi` - high
- `lo` - low

### Number Systems

- `bin` - binary
- `dec` - decimal
- `hex` - hexadecimal
- `oct` octal

### System

- `cd` - change directory
- `dir` - directory
- `ls` - list
- `os` - operating system
- `pwd` - print working directory
- `rm` - remove
- `sys` - system
- `win` - Windows

### Math

- `abs` - absolute
- `add` - addition
- `avg` - average
- `diff` - difference
- `div` - divide/division
- `dvd` - dividend (the number being divided)
- `max` - maximum
- `mcand` - multiplicand (the number being multiplied)
- `min` - minimum
- `mlier` - multiplier (the number multiplying)
- `mod` - modulus
- `mul` - multiply/multiplication
- `pow` - power
- `prod` - product
- `quot` - quotient
- `rem` - remainder
- `sqr` - square
- `sqrt` - square root
- `sub` - subtraction

### Units of Measurement

#### Data Size

- `b` - bit
- `nib` - nibble
- `B` - byte
- `KB` - kilobyte
- `MB` - megabyte
- `GB` - gigabyte
- `TB` - terabyte
- `PB` - petabyte

#### Data Speed

- `bps` - bits per second
- `Bps` - bytes per second
- `KBps` - kilobytes per second
- `MBps` - megabytes per second
- `GBps` - gigabytes per second
- `TBps` - terabytes per second

#### Time

- `ns` - nanoseconds
- `ms` - milliseconds
- `ps` - picoseconds
- `secs` - seconds

## Conventions

### Markdown

- For top-level, important, standalone documents (e.g., `STD_COVENANT.md`, `CONTRIBUTING.md`), use SCREAMING_SNAKE_CASE.  
- For files within organized documentation folders or URL-friendly paths (e.g., `docs/getting-started.md`, `docs/installation.md`), use kebab-case.

To explicitly indicate a path refers to a **directory**, append a trailing slash (`/`).

- Correct usage: `src/`, `node_modules/`, `tests/`
- This helps distinguish folders from files in documentation and reduces ambiguity in technical writing.

### JavaScript/Typescript Package Structure

In each package root directory:

- Use a `src/` folder as the main code entry point.
  - Include `index.ts` as the entry file.
  - If the package consists of only one file, `src/` may be omitted; use `index.ts` at the root instead.

- Include an `examples/` folder, or alternatively an `example.ts` or `examples.ts` file at the root for usage demos.
- Add a `tests/` folder or include a `(package_name).test.ts` file at the root for tests.
- Required files at the root:
  - `README.md`
  - `LICENSE`

## Casing

### kebab-case

CLI commands

### snake_case

Use `snake_case` for naming files and folders consistently across your project unless otherwise dictated by the language’s or framework’s convention.

## TL;DR

## Attribution