# vcdgen

Small utility to convert space-separated timings to a .vcd file, which can be visualized by GTKWave, [Fliplot](http://raczben.pythonanywhere.com/) etc.

## Usage

```bash
$ vcdgen "<timings>"
```

### Example:

```
$ vcdgen "100 300 100 300 100 200" > out.vcd
```

> Note: Timings are µsec