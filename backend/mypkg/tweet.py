class Tweet:
   'Wraps #user, #text and #sentiment'

   def __init__(self, user, text, id):
      self.user = user
      self.text = text
      self.id = id
      self.polarity = None
      self.sentiment = None
      
