import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import exif from 'exifreader';
import { basename, dirname, join as pathJoin } from 'path';
import toidentifier from 'toidentifier';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  markdown: {
    syntaxHighlight: 'prism',
  },
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [
      {
        name: 'exif-loader',
        transform(code, id) {
            const [path, query] = id.split('?');
            if (query !== 'exif')
                return null;
    
            const data = fs.readFileSync(path);
            const hex = data.toString('hex');
            const arrayBuffer = Uint8Array.from(hex.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))).buffer
            const result = exif.load(arrayBuffer);
            
            return `
              import image from "${pathJoin(dirname(path), basename(path).replace('IMG_', 'IMG_E').replace('HEIC', 'jpg'))}";
              export default {
                ...image,
                exif: ${JSON.stringify(result)},
              };
            `;
        }
    }
    ]
  }
});
