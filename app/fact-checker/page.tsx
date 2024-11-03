'use client';

import React, { useState } from 'react';
import { Search, Loader2, AlertCircle, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { checkFactsWithCohere } from '@/lib/cohere';

export default function FactCheckerPage() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const checkFacts = async () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    setError(null);
    
    try {
      const factCheckResults = await checkFactsWithCohere(query);
      setResults(factCheckResults);
    } catch (err) {
      setError("Unable to verify facts at the moment. Please try again.");
      console.error('Fact checking error:', err);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/5 to-background py-24">
        <div className="container relative">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              AI Fact Checker
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Verify claims and statements using advanced AI technology
            </p>
            
            <div className="w-full max-w-2xl mt-8">
              <div className="flex gap-2 relative">
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Enter a claim to fact-check..."
                  className="flex-1"
                />
                <Button 
                  onClick={checkFacts}
                  disabled={isSearching || !query.trim()}
                >
                  {isSearching ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : (
                    <Search className="w-4 h-4 mr-2" />
                  )}
                  Check Facts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="container py-8">
        {results && (
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Truth Score Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Truth Score
                  {results.truthScore > 70 ? (
                    <ThumbsUp className="text-green-500" />
                  ) : (
                    <ThumbsDown className="text-red-500" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-muted rounded-full h-4">
                  <div 
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${results.truthScore}%`,
                      backgroundColor: `hsl(${results.truthScore * 1.2}, 70%, 50%)`
                    }}
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  This claim is {results.truthScore.toFixed(1)}% verified based on our sources
                </p>
              </CardContent>
            </Card>

            {/* Sources Card */}
            <Card>
              <CardHeader>
                <CardTitle>Verified Sources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {results.sources.map((source, index) => (
                  <div key={index} className="p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold text-primary">{source.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{source.excerpt}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">
                        Confidence: {source.confidence}%
                      </span>
                      <a 
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 text-sm"
                      >
                        View Source
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Related Claims */}
            <Card>
              <CardHeader>
                <CardTitle>Related Claims</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {results.relatedClaims.map((claim, index) => (
                    <li key={index}>{claim}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Error Alert */}
        {error && (
          <Alert variant="destructive" className="max-w-4xl mx-auto mt-8">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </section>
    </div>
  );
}