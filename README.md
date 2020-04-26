# setup-opengl

This action sets up an OpenGL environment for use in GitHub Actions workflow by:

 - Loading a custom build of Mesa / OpenSWR
 - Setting LD_LIBRARY_PATH to include the Mesa libraries
 - Installing `xvfb`
 
 This only works on `ubuntu-bionic` runtimes
 
 ## Usage
 
 The `setup-opengl` is straight forward to use, all you have to do is make sure you run on `ubuntu-bionic` (currently latest) and add `uses: openrndr/setup-opengl@v1` to your workflow.
 After you can run programs that are supported by Mesa/Gallium with OpenSWR. 
 
 ### Basic Example
```yaml
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: openrndr/setup-opengl@v1
      - run: xvfb-run glxinfo
```

## OpenGL support details

Support is based on a build of Mesa 18.2.3 built on Ubuntu 18.04 using:

```bash
meson --buildtype=release -Degl=false -Dgallium-vdpau=false -Dgallium-xvmc=false -Dgallium-omx=disabled -Dgallium-drivers=swrast,swr -Dplatforms=x11 -Dglx=gallium-xlib -Dopengl=true  -Dvulkan-drivers= -Dtexture-float=true -Dosmesa=gallium -Ddri-drivers= build
```

## License

The scripts and documentation in this project are released under the [MIT license](LICENSE.md).

## Current Status

This action is in active development.