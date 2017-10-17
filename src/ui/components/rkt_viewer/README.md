# Rocket viewer

The rocket viewer is a generic viewer that allows you to visualize different kind of data, such as Medical images (DICOM) microcoscopic images (TIFF) or surfaces (VTK, NRRD), using the latest web technologies.

**The rocket viewer** itself, is just a manager, an abstract entity that depending of the input that can be given from an *URL* or just drag and dropping to the web browser choose the necessary technology to visualize the data. 

## Test data

* Dicom images one frame: 
* -> URL: https://www.dl.dropboxusercontent.com/s/dnpps24dsbzrbgy/IMG00029133.dcm?dl=0

* Dicom image multiframe:
* -> URL:
https://www.dl.dropboxusercontent.com/s/22ayfa2zfnm3qjz/Short_axis_init.dcm?dl=0

* Tiff image:
* -> URL: https://www.dl.dropboxusercontent.com/s/3p20fnuzabc6xvs/Img_0001_Nuc.tif?dl=0

* PDF ecg signal:
* -> URL:
https://www.dl.dropboxusercontent.com/s/zklpqqbvbk3lqra/003pre.pdf?dl=0

* NRRD volume:
* -> URL:
"https://www.dl.dropboxusercontent.com/s/rut48j5yjz54lml/1000.nrrd?dl=0"

* NRRD image + surface:
* -> URL:

* PLY mesh:
* -> URL:
https://www.dl.dropboxusercontent.com/s/on5ar1hlkx29dko/411.ply?dl=0

* VTK volume (with Field data):
* -> URL:
"https://www.dl.dropboxusercontent.com/s/pzezo8vfivsuypj/423_SURFACE.vtk?dl=0"

* VTK volume (with Scalars):
* -> URL:
"https://www.dl.dropboxusercontent.com/s/l2e0j02ecfmc36x/VTK_PostRep22_Andrei.vtk?dl=0"

## Test data in viewer

Dicom image one frame

```
http://localhost:3000/viewer?type=dicom&url=https%3A%2F%2Fwww%2Edl%2Edropboxusercontent%2Ecom%2Fs%2Fdnpps24dsbzrbgy%2FIMG00029133%2Edcm%3Fdl%3D0
```

Dicom image multi frame

```
http://localhost:3000/viewer?type=dicom&url=https%3A%2F%2Fwww%2Edl%2Edropboxusercontent%2Ecom%2Fs%2F22ayfa2zfnm3qjz%2FShort_axis_init%2Edcm%3Fdl%3D0

```

Tif image 

```
http://localhost:3000/viewer?type=tif&url=https%3A%2F%2Fwww%2Edl%2Edropboxusercontent%2Ecom%2Fs%2F3p20fnuzabc6xvs%2FImg_0001_Nuc%2Etif%3Fdl%3D0
```

PDF Signal

```
http://localhost:3000/viewer/viewer?type=pdf&url=https%3A%2F%2Fwww%2Edl%2Edropboxusercontent%2Ecom%2Fs%2Fzklpqqbvbk3lqra%2F003pre%2Epdf%3Fdl%3D0
```

PLY mesh

```
http://localhost:3000/viewer/viewer?type=ply&url=https%3A%2F%2Fwww%2Edl%2Edropboxusercontent%2Ecom%2Fs%2Fon5ar1hlkx29dko%2F411%2Eply%3Fdl%3D0
```

NNRD volume

```
http://localhost:3000/viewer/viewer?type=nrrd&url=https%3A%2F%2Fwww%2Edl%2Edropboxusercontent%2Ecom%2Fs%2Frut48j5yjz54lml%2F1000%2Enrrd%3Fdl%3D0
```

VTK volume (with Field Data)

```
http://localhost:3000/viewer/viewer?type=vtk&url=https%3A%2F%2Fwww%2Edl%2Edropboxusercontent%2Ecom%2Fs%2Fpzezo8vfivsuypj%2F423_SURFACE%2Evtk%3Fdl%3D0
```

VTK volume (with Scalars)

```
http://localhost:3000/viewer/viewer?type=vtk&url=https%3A%2F%2Fwww%2Edl%2Edropboxusercontent%2Ecom%2Fs%2Fl2e0j02ecfmc36x%2FVTK_PostRep22_Andrei%2Evtk%3Fdl%3D0
```