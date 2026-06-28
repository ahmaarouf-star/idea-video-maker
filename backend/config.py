import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str = os.getenv("DATABASE_URL", "postgresql://videoadmin:videoadmin123@localhost:5432/idea_video_maker")
    redis_url: str = os.getenv("REDIS_URL", "redis://localhost:6379/0")
    jwt_secret: str = os.getenv("JWT_SECRET", "your-secret-key")
    openai_api_key: str = os.getenv("OPENAI_API_KEY", "")
    eleven_labs_api_key: str = os.getenv("ELEVEN_LABS_API_KEY", "")
    environment: str = os.getenv("ENVIRONMENT", "development")
    
    class Config:
        env_file = ".env"
        case_sensitive = False

settings = Settings()
