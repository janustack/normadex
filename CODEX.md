#  STD Covenant Coding Codex

A covenant of consistent coding practices, naming conventions, and abbreviations for accessible and maintainable development.

## Table of Contents

- [Guiding Principles](#guiding-principles)
- [Abbreviations](#abbreviation)
  - [General](#general)
  - [Math](#math)
- [Naming Conventions](#naming-conventions)

## Guiding Principles

- **Clarity over Brevity**: Prefer descriptive names over short, ambiguous ones. Abbreviations should be common and easily understood.
- **Consistency is Key**: Adhere to the established conventions of a language, framework, or project.
- **Context Matters**: The best naming choice often depends on the specific context of the code.


## Our Pledge

By contributing to this project, we pledge to diligently uphold the standards outlined in our Engineering Codex. Our commitment is twofold: to build inclusive and accessible experiences for all users, regardless of ability, and to craft clean, consistent, and maintainable code that our colleagues can confidently build upon. This pledge unites our efforts in creating software that is not only robust and scalable but also respectful to its users and its creators.

## Abbreviations

A list of approved abbreviations to be used when a full name is overly verbose.

Some of these may not be practical or recommend for use case but are defined here for standardization regardless.

### General

- `arr` - array
- `idx` - index
- `rec` - recursion
- `iter` - iteration
- `val` - value
- `mid` - middle
- `tmp` - temporary
- `bin` - binary
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
- `lvl` - level
- `obj` - object
- `ref` - reference
- `cfg` - config
- `desc` - description
- `config` - configuration
- `io` - I/O (Input/Output)
- `hi` - high
- `lo` - low
- `in` - input
- `out` - output
- `int` - integer
- `exec` - execute
- `exe` - executable
- `lang` - language
- `eval` - evaluate
- `acy` - Andrew Christian Young
- `char` - character
- `attr` - attribute
- `comp` - component or compile
- `cmp` - comparison
- `src` - source
- `dist` - distribution or distance
- `fn` or `func` - function
- `prev` - previous
- `pub` - public
- `const` - constant
- `env` - environment
- `fmt` - format
- `buf` - buffer
- `undef` - undefined
- `def` - define or definition
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
- `fib` - Fibonacci
- `mem` - memory
- `memo` - memoization
- `seq` - sequence
- `cpy` - copy
- `doc` / `docs` - document(s)
- `ptr` - pointer
- `addr` - address
- `cd` - change directory
- `del` - delete
- `proc` - process
- `dir` - directory
- `exec` - execute
- `exe` - executable
- `elem` / `elems` - element(s)
- `ls` - list
- `pwd` - print working directory
- `lit` - literal
- `rm` - remove
- `os` - operating system
- `app` / `apps` - application(s)
- `deref` - dereference
- `rev` - reverse
- `win` - Windows
- `sys` - system
- `ign` - ignore
- `lib` - library
- `pkg` - package
- `interop` - interoperability
- `repo` - repository
- `opt` - optional or option
- `param` / `params` - parameter(s)
- `cnt` - count
- `arg` / `args` - argument(s)
- `argc`or `argcnt` - argument count
- `argv` or `argvec` - argument vector
- `alg` - algorithm
- `async` - asynchronous
- `sync` - synchronous
- `inc` - increment
- `trav` - traverse or traversal

### Math

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

## Naming Conventions

### Markdown

- For top-level, important, standalone documents (e.g., `STD_COVENANT.md`, `CONTRIBUTING.md`), use SCREAMING_SNAKE_CASE.  
- For files within organized documentation folders or URL-friendly paths (e.g., `docs/getting-started.md`, `docs/installation.md`), use kebab-case.

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













## kebab-case

## snake_case

Use `snake_case` for naming files and folders consistently across your project unless otherwise dictated by the language’s or framework’s convention.

## TL;DR


## Attribution

This Codex of Code Standards is adapted from the []

[homepage]:



