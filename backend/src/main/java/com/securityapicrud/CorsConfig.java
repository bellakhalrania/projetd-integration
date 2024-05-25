package com.securityapicrud;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer  {

	@Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("http://localhost:63912/") // Allow requests from this origin
            .allowedMethods("GET", "POST", "PUT", "DELETE") // Allow these methods
            .allowedHeaders("*"); // Allow all headers
    }
}
