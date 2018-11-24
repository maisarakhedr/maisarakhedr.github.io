---
layout: post
title:  "Why Developers Hate Agile?"
description: "As an Agile fan, I always think that Agile is a must have,
it's an intuitive idea, Why can anyone hate it?! I have never been able
to understand those who resist Agile transformation or adoption.
Recently I started to read more from the other perspective trying to
understand what they feel, fear and want?"
image: /assets/images/hateagile.png
---


Are they? Kind of - I think - some say it clearly, some are not
convinced, some see it's important but not as important as
technicality. 



As an Agile fan, I always think that Agile is a must have, it's an
intuitive idea, Why can anyone hate it?! I have never been able to
understand those who resist Agile transformation or adoption. Recently I
started to read more from the other perspective trying to understand
what they feel, fear and want?  I'll share in this article my finding on
the answer of this question.



## Do they hate Agility or Agile?



At Agile Australia Conference this year, **[Martin
Fowler](https://en.wikipedia.org/wiki/Martin_Fowler)** - Coauthor of Agile
Manifesto - has a talk entitled "[State of Agile in
2018](https://www.infoq.com/presentations/agile-2018)". the main point
of his talk was about the challenge we face as an Agile community right
now, he said

> Our challenge at the moment isn't making agile a thing that people want
to do, it's dealing with what I call faux-agile: agile that's just the
name, but none of the practices and values in place. **Ron Jeffries** often
refers to it as "Dark Agile", or specifically "Dark Scrum". This is
actually even worse than just pretending to do agile, it's actively
using the name "agile" against the basic principles of what we were
trying to do, when we talked about doing this kind of work in the late
90s and at
Snowbird.[\*](https://martinfowler.com/articles/agile-aus-2018.html)

He talked about 3 problems that face the community that we should fight
against, I'll mention below one of them which is related to the article
context

*  The lack of recognition of the importance of technical
excellence. He mentioned that A lot of agile conferences don't
tend to talk very much about the actual techniques of writing
software. which cause that agile conferences are now
attracting a lot of people who were involved in the project
management side and things of that kind, but not very many
people who are the technical people who actually did the work.
He think that even led to something worse which is developers
tried to make their own world away from business and project
managers and created the "[Software Craftsmanship
Movement](http://manifesto.softwarecraftsmanship.org/#/en) ".
Which is against the whole point of agile which is to combine
across all different areas.


However **[Robert C Martin (Uncle
Bob)](https://en.wikipedia.org/wiki/Robert_C._Martin)** - Agile
Manifesto coauthor and author of Clean Code - disagree with
Fowler's opinion on the craftsmanship movement point in his
[blog
post](https://blog.cleancoder.com/uncle-bob/2018/08/28/CraftsmanshipMovement.html)
as he is one of the supporters of this movement. But he agrees
with him in the whole point of view. He **(Uncle Bob)** talked about
the same idea years ago in his talk "[The Land that Scrum
Forgot](https://www.youtube.com/watch?v=hG4LH6P8Syk)". Mainly,
he believes that The Agile movement main goal was to "heal the divide
between programmers and management" as mentioned by
**[Kent Beck](https://en.wikipedia.org/wiki/Kent_Beck)** in the Agile Manifesto writing meeting years ago. The Agile movement abandoned it's goal by
turning Agile into a business that promotes “new-and-better”
ways to manage. Instead of bringing managers and programmers
closer together, the Agile movement focussed almost entirely on
project management, and virtually excluded the programmers.


**[Dave
Tomas](https://en.wikipedia.org/wiki/Dave_Thomas_(programmer))** - 
Agile Manifesto Coauthor - discussed the same idea too in his
talk "[Agile is
dead](https://www.youtube.com/watch?v=a-BOSpxYJ9M)" at GOTO
conference 2015, after the success of his blog post "[Agile is
dead, Long live
Agility](https://pragdave.me/blog/2014/03/04/time-to-kill-agile.html)", He
insisted - in his talk -  that Agile is an adjective not a noun
and they  use it as a noun just because you can't sell
"Adjectives". 



So the problem is not in the Agile itself, everyone will
acknowledge the Agile values and principles, but the real
problem is how we apply Agile? and how it has been sold as a
project management tool and ignoring the technical part that led
to excluding developers from the Agile community. In the three
talks, all of them mentioned terms like faux-agile, flaccid
scrum, dark agile and dark scrum. So I decided to dig deep in
these terms.



## Flaccid Scrum

**Martin Fowler** was the first to introduce this term in his
[article "Flaccid
Scrum"](https://martinfowler.com/bliki/FlaccidScrum.html) back
to 2009. 

> There's a mess I've heard about with quite a few projects
recently. It works out like this:
*   They want to use an agile process, and pick Scrum
*   They adopt the Scrum practices, and maybe even the
principles
*   After a while progress is slow because the code base is a
mess

> What's happened is that they haven't paid enough attention to
the internal quality of their software. If you make that mistake
you'll soon find your productivity dragged down because it's
much harder to add new features than you'd like. You've taken on
a crippling Technical Debt and your scrum has gone weak at the
knees. 



## Dark Scrum

**[Ron Jeffries](https://en.wikipedia.org/wiki/Ron_Jeffries)** -
coauthor of Agile Manifesto and coauthor of XP - introduced this
term in article entitled with the same title ["Dark
Scrum"](https://ronjeffries.com/articles/016-09ff/defense/), he
defined it as   

> Too often, at least in software, Scrum seems to oppress people.
Too often, Scrum does not deliver as rapidly, as reliably, as
steadily as it should. As a result, everyone suffers. Most
often, the developers suffer more than anyone.

He listed things that can go wrong in Scrum which lead to Dark
Scrum:

*   It takes time to get good at Scrum, Self-organization is slow to happen.
*   He used a term called Power holders, which means people who have and exert power over
developers whether by a development manager, a team lead, a Product
Owner, or even a Scrum Master. They can drive the team to Dark scrum by
    *   Power holder oppresses the team every day in "Daily Scrum".
    *   Power holders drive the team,  and tell them what they have to do because Business-side is not available in Sprint Planning or not
trained in how to be a Product Owner.
    *   Power holders misuse the sprint reviewand sprint retrospective
    by making sure the programmers are made fully aware of how badly they’ve done.

## Scrum

I'll need to clarify that this is not a problem in Scrum itself,
Scrum doesn't tell us to ignore technical practices, **Martin
Fowler** defended Scrum in the same article "Flaccid Scrum" 

> I've mentioned Scrum because when we see this problem, Scrum
seems to be particularly common as the nominative process the
team is following. 

> In defense of Scrum, it's important to point out that just
because it doesn't include technical activities within its scope
should not lead anyone to conclude that it doesn't think they
are important. Whenever I've listened to prominent Scrummers
they've always emphasized that you must have good technical
practices to succeed with a Scrum project. They don't mandate
what those technical practices should be, but you do need them.

Also **Ron Jeffries** mentioned that Scrum is actually trying to
change all what he described as Dark Scrum. But until the hearts
and minds of the organization actually change, there’ll be too
much of the old-style management happening … and now it happens
every couple of weeks … often every single day!



Furthermore **[Ken
Shwaber](https://en.wikipedia.org/wiki/Ken_Schwaber)** - Coauthor
of Scrum and Agile Manifesto -  agrees Martin Fowler on "Flaccid
Scrum". If you'd like to see the creator of Scrum "inspect and
adapt", please check his
[letter](https://www.scrum.org/index.php/about) in why he
created "Scrum.org". It's kind of retrospective, Scrum Guide
itself and PSM certificate were action items to fight "Flaccid Scrum".



## How to overcome Faux-agile/Flaccid Scrum/Dark Scrum?

As you might notice, all the references in this article are
coauthors of the Agile Manifesto, and the most important most of
them are Extreme Programming gurus - Developers in the first
place, So I think you won't be surprised If I told you that they
think the solution of all these issues by adopting XP practices.
and I think they are totally right. XP are the only Agile
methodology that advice and tells how to do it, I believe it's
the only methodology made by developers to make their life
better.



**Ron Jeffries** in his article Dark Scrum mentioned some practices
that could help Scrum teams do it right and avoid Dark Scrum,
here it follow

*   Refactoring (Incremental Design)


    *   In a Scrum project, we’re supposed to deliver a tested,
working, potentially shippable Product Increment after each
Sprint. Obviously, we can’t have the whole design figured out at
the beginning: we only know roughly what the product will even
be. Equally obviously, we need to wind up with a good design at
the end. Therefore, the design of our software must be created
incrementally, a bit at a time.

    *   if we are going to deliver a Product Increment every Sprint,
we must find a way to do good design, incrementally.

    *   The best way we know today to do incremental design is
called “Refactoring”. Refactoring is the process of improving
the design of existing code — without breaking it!


*   Automated Acceptance Test


    *   PO and the developers to agree on concrete, executable
acceptance tests for each story.

    *   When we automate these examples, we can run all of them and
show with certainty that the product is still doing what we
agreed it should do.


*   TDD


    *   It’s very helpful to have a lot of little tests supporting
each larger acceptance test, because the little tests tell us
which bit we got wrong, while the acceptance test just screams
“Something Broke!”

    *   These tests also help us with larger refactorings.


*   Continuous Integration


    *   An automated build process, running the system’s test suite,
turns out to be an essential part of a Scrum team’s development
process. For most teams, the more frequently they build, the
better things go. Building “all the time” seems to go best




## Conclusion

There is a quote for **Uncle Bob** which say it all

> Scrum without technical practices becomes a tractor
pull. Every sprints it gets harder and harder and harder to make
progress, because the code is getting worse and worse.



So developers don't hate Agile, they hate what's called
faux-agile, they hate the wrong applying of Agile, they hate the
process without the technical practices that were made to make
their life easier.  This is the lesson we learned years ago but
We forget it everyday. 



By this article, I hope I helped myself, scrum masters and
developers to find what developers really hate about Agile, to
have a fruitful discussion helping us doing Agile right and
reach the aimed Agility. It's never been either process or
technical excellence, Both are always needed to make it right.
