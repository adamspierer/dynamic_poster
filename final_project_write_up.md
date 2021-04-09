# Final Project

## Instructions

This repository is a stub for your final project. Fork it as a template for your project, and develop your code in the forked repository. For details on how to fork and turn in the project, see section 3 of the github education  [documentation](https://education.github.com/guide/forks). After you fork the repository, please enable the issue tracker in the repository settings so that others in the class (including the professor) can provide feedback.

Expand on the readme questions below to provide an overview of the goals, background, and challenges for the final project. You can delete the questions as you write text that answers them, or leave the prompts in place. You can also delete this instruction section of you like.

## Introduction

This is a final project for the [Interacting with Data](https://github.com/Brown-BIOL2430-S04-Fall2015/syllabus) seminar in fall 2015. This project (a very brief, ie 1-2 sentence, overview of the project)...

To view this project, ... (embed visualization here or provide instructions on how to view the project).

**I have two projects I am interested in completing if time permits.**

**1. INTERACTIVE POSTER: I am interested in creating a poster I can display at a conference and respond to user input (all through a raspberry pi, projector and mouse) for data exploration/exposition/animation.**

**Pros:** 
<ul>
<li>Challenge traditional poster norms</li>
<li>Low cost (no printing charges)</li>
<li>Reusable and updatable</li>
<li>Open-source languages (HTML/CSS/JS) and consoles (Raspberry Pi/Arduino)</li>
<li>Easily applied to a lab website</li>
</ul>
**Cons:** 
<ul>
<li>Complexity and difficulty of execution</li>
<li>Cannot be displayed indefinitely (projector bulb life)</li>
</ul>

**2. Design a personal website and have a few D3 plots to highlight my Drosophila climbing data. This would be great to have from a professional standpoint, but I am also a bit weary because I am uncomfortable putting my data on the internet and opening myself up to being scooped, prior to publication.**

## The data

Description of data...

- Data source (simulated/ published/ unpublished?)
- Data structure - what are the variables? How are they organized? What states can they have

**I have original, experimental data of flies, organized by a number of different categorical/ordinal/binomial variables with continuous variables (x,y,time coordinates) as my output. **
<ul> 
	<li>Continuous</li><ul>
		<li>x-position</li>
		<li>y-position</li>
		<li>velocity</li>
		</ul>
	<li>Categorical</li><ul>
		<li>Mitochondria type</li>
		<li>Vial ID code</li>
		<li>Vial position</li>
		<li>Rack number</li>
		<li>Video number</li>
	</ul>
	<li>Ordinal</li><ul>
		<li>Day</li>
		<li>Timestamp</li>
		</ul>
	<li>Binomial</li><ul>
		<li>Exercise State</li>
		</ul>
</ul>


## Background

Examples of previous visualizations of similar data or processes, if any exist... Include links or add images to markdown document... how were data mapped to aesthetics in these previous approaches? Was there filtering?

Shortcomings of previous approaches, or potentially interesting gaps between previous approaches...

## This project

### Mapping of data to aesthetics

How will aesthetic attributes ( X / Y / color / shape / size /texture / etc ) will be mapped to the data?

**I have two main effects I am interested in exploring. The first is the mito-type of my flies, which I plan to map with colors (ROYGBV). The second is exercise condition, which is paired with mito-type so I will map that with hue (light vs. dark)**

### Filtering

Are data filtered? ie in some views are some data not mapped to particular attributes of the image? What is the goal of the filtering?

**I do not plan to filter my data on the whole, but I will 'zoom' in on certain parts of my data that I want to highlight**

### Extra ink

Are there aesthetic attributes that are not mapped to the data? If so, what purpose do they serve ( redundancy for robustness / improve visual metaphor / but data in context / beauty / etc )?

Are any data mapped to more than one aesthetic attribute? Why?
**I was planning on having a single figure that showed mean vertical velocity on the y-axis and day of assay on the x-axis. I intend to render the figure by having all the points start out along the x-axis, and then animating them so they 'climb' at they rise at the same velocity to their final resting position. The points will climb for the same duration of the videos they were derived from (5 seconds) and this will provide the viewer with a sense of perspective, as well as data ink...because who really knows what 1.3 centimeters/second actually looks like?!?!** 


### Motion

If motion is used, what purpose does it serve ( metaphor (eg representing motion in real world) / transition continuity between views / etc )
**I am interested in using motion to represent time that my flies are climbing for, as well as the time in days that the flies have to senesce.**

### Perspective

To what extent is perspective (eg mappings) controlled by users vs hard coded in advance? How does this project aid in exploration vs exposition?

**Once I animate the data, I would like to have the user be able to filter by different conditions and see how the plot change over time**

## Assessment

Was the new visualization successful at providing insight that was not possible or more difficult with previous approaches?

What are the main limitations of new approach?

What are future directions this could go in?


