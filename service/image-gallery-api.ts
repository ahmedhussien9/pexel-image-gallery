import { createClient } from "pexels";

export async function GetImageGalleryApi() {
  const client = createClient(
    "563492ad6f91700001000001aee19569998e4aaba11d2dd69df45b60"
  );
  const query = "stockholm";
  const response = await client.photos.search({
    query,
    per_page: 20,
  });
  return response;
}
