-- Create a function to safely increment view count
CREATE OR REPLACE FUNCTION increment_view_count(
  content_type TEXT,
  content_id UUID
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  IF content_type = 'episodes' THEN
    UPDATE episodes
    SET view_count = view_count + 1
    WHERE id = content_id;
  ELSIF content_type = 'blog_posts' THEN
    UPDATE blog_posts
    SET view_count = view_count + 1
    WHERE id = content_id;
  END IF;
END;
$$;