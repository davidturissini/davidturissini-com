/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "*.HEIC?exif" {
  const image: import("astro").ImageMetadata;
  const exif: import("./defs/exif").ExifData;

  export default {
    ...image,
    exif,
  };
}