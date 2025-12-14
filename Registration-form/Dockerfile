FROM python:3.11-slim

WORKDIR /app

# Install system dependencies INCLUDING tesseract
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    tesseract-ocr \
    tesseract-ocr-eng \
    poppler-utils \
    libgl1 \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender1 \
    libgomp1 \
    libfontconfig1 \
    libice6 \
    && rm -rf /var/lib/apt/lists/*

# Setup non-root user
RUN groupadd --system --gid 999 nonroot \
    && useradd --system --gid 999 --uid 999 --create-home nonroot

# Copy requirements
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application files
COPY --chown=nonroot:nonroot . .

# Create .streamlit directory
RUN mkdir -p .streamlit submitted_papers && chown -R nonroot:nonroot .streamlit submitted_papers

USER nonroot

# Expose port (Render will override this with $PORT)
EXPOSE 8502

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 CMD curl --fail http://localhost:${PORT:-8502}/_stcore/health || exit 1

# Run Streamlit with dynamic port from Render
CMD streamlit run app.py \
    --server.port=${PORT:-8502} \
    --server.address=0.0.0.0 \
    --server.headless=true \
    --server.enableCORS=false \
    --server.enableXsrfProtection=false \
    --server.baseUrlPath=/registration-form
