import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const client = createClient({
  projectId: 'b48tbhm2',
  dataset: 'production',
  token: 'skswmHZxlkYDnltrf8wHPcQnglkUK4ffObJ3DcC9CpmBs4SOpNT0ZaFWt3TD86DeaFpOMeHI6PJZQWeCwKdzOWMASj1WIRWuKlJKrw9fg6dFpBJMFirVg6U01Zo2psA2wDPa8YgP7aNAOi5DG2U04wgTpAQ1DIsAfqE2BmyUbs2JwrXRFYq8',
  apiVersion: '2025-01-15',
  useCdn: false,
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading Image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    console.log(`Image Uploaded Successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to Upload Image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    console.log(`Processing Product: ${product.title}`);

    let imageRef = null;
    if (product.imageUrl) {
      imageRef = await uploadImageToSanity(product.imageUrl);
    }

    // Aligning data with the new schema
    const productData = {
      _type: 'product',
      title: product.title,
      description: product.description || '', // Default to empty string if not provided
      price: product.price, // Ensure price is a number
      discountPercentage: product.discountPercentage || 0, // Default to 0
      isNew: product.isNew || false, // Default to false
      tags: product.tags || [], // Default to empty array if no tags provided
      productImage: imageRef
        ? {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: imageRef,
            },
          }
        : undefined, // Set to undefined if no image
    };

    // Validate required fields
    if (!productData.title || !productData.price || !productData.description || !productData.productImage) {
      console.error(`Skipping product due to missing required fields:`, product);
      return;
    }

    console.log(`Uploading Product: ${productData.title}`);
    const createdProduct = await client.create(productData);
    console.log(`Product Uploaded Successfully: ${createdProduct._id}`);
    console.log('----------------------------------------------------------\n\n');
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    console.log('Fetching Products Data From API ...');
    const response = await axios.get('https://template6-six.vercel.app/api/products');
    
    if (!response.data || !Array.isArray(response.data)) {
      throw new Error('Invalid product data received.');
    }

    const products = response.data;

    for (const product of products) {
      await uploadProduct(product);
    }

    console.log('Product Import Completed Successfully!');
  } catch (error) {
    console.error('Error fetching and uploading products:', error);
  }
}

importProducts();
